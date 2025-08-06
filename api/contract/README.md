# How to spin up you own MOCK Server

You can use the prism-cli mock server to simulate the API responses based on the OpenAPI specification.

to install it:

`npm install  @stoplight/prism-cli`

to run the mock server:

`npx prism mock api/contract/openapi.yaml`

This will start a mock server on port 4010.

This is what you should see in the terminal:

```
❯ npx prism mock api/contract/openapi.yaml
[12:09:42 PM] › [CLI] …  awaiting  Starting Prism…
[12:09:43 PM] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/vehicles
[12:09:43 PM] › [CLI] ℹ  info      POST       http://127.0.0.1:4010/vehicles
[12:09:43 PM] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/vehicles/7085481698877098
[12:09:43 PM] › [CLI] ℹ  info      DELETE     http://127.0.0.1:4010/vehicles/7387849688246246
[12:09:43 PM] › [CLI] ℹ  info      PUT        http://127.0.0.1:4010/vehicles/8869510713265224/refuel
[12:09:43 PM] › [CLI] ℹ  info      PUT        http://127.0.0.1:4010/vehicles/3535602649401044/charge
[12:09:43 PM] › [CLI] ℹ  info      PUT        http://127.0.0.1:4010/vehicles/5265590805485066/mileage
[12:09:43 PM] › [CLI] ▶  start     Prism is listening on http://127.0.0.1:4010
[12:09:57 PM] › [HTTP SERVER] get /vehicles ℹ  info      Request received
```

Alternatively you can run it as a container using the provided `mockserver.sh` script, 
but it doesn't work on Apple Silicon Macs (M1, M2, etc.) due to architecture compatibility issues.