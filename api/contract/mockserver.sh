#!/bin/bash
docker run --rm -it \
  --platform linux/amd64 \
  -v $PWD:/tmp \
  -p 4010:4010 \
  stoplight/prism:4 mock /tmp/openapi.yaml