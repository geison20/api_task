#!/bin/bash

echo "logs do nginx";

gnome-terminal -x bash -c tail -n 100 -f /home/geisson/Documentos/Projetos/Task-list/log/access_req_res.log;

