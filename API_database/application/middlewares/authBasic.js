/*
|--------------------------------------------------------------------------
| Global middleware
|--------------------------------------------------------------------------
| do auth basic in all routes
|
*/

(function() {

    var basicAuth = require("basic-auth");

    module.exports = function(app) {

        var ApiCredencials = app.models.apiCredencials;

        var validObjAuthAndGetCredencials = function(req) {
            return new Promise((resolve, error) => {
                if ('authorization' in req.headers) {
                    var credencials = basicAuth(req); //return obj

                    if (!('name' in credencials) || !('pass' in credencials)) {
                        error("not permission for access");
                    }

                    var {
                        name: tk,
                        pass: pass
                    } = credencials;

                    ApiCredencials.findOne({
                            token: tk,
                            password: pass
                        })
                        .exec(function(err, apiSuccessLogin) {
                            if (err) {
                                error("Error in find data");
                            } else {
                                if (apiSuccessLogin)
                                    resolve();
                                else
                                    error("credencials wrong, permission forbidden");
                            }
                        });
                } else {
                    error("not permission for access");
                }
            });
        };

        var authentication = function(req, res, next) {
            validObjAuthAndGetCredencials(req)
                .then(function() {
                    next();
                })
                .catch(function(err) {
                    app.helpers.responseErrorApiJson(403, {
                        message: err
                    }, res);
                });
        };

        app.use(authentication);

        return this;
    };
})();
