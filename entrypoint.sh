#!/bin/bash
set -xe

DEF_REST="http://gitlab-timereporting.k8s.atlascon.cz"

REST=${REST_URL:-$DEF_REST}
REST=${REST%/}
export REST=$REST

envsubst '\$REST' </etc/nginx/nginx.conf.template >/etc/nginx/nginx.conf

cat /etc/nginx/nginx.conf

exec "$@"
