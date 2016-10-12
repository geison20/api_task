module.exports = function(app) {

    var responseErrorApiJson = function(sts, object, response) {

        if (arguments.length < 3) {
            return new TypeError("Faltou passar algum parametro");
        } else if (typeof object != 'object') {
            return new TypeError("2 argument must to be a object");
        }

        response.status(sts).json(object);

    };

    return responseErrorApiJson;
};
