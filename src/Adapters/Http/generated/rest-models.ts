import { z } from 'zod';

export type Vehicle = z.infer<typeof Vehicle>;
export const Vehicle = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
  totalMileage: z.number(),
});

export type GasolineVehicle = z.infer<typeof GasolineVehicle>;
export const GasolineVehicle = z.intersection(
  z.object({
    id: z.number(),
    brand: z.string(),
    model: z.string(),
    engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
    totalMileage: z.number(),
  }),
  z.object({
    fuelConsumption: z.number(),
    tankCapacity: z.number(),
    currentFuelLevel: z.number(),
  })
);

export type ElectricVehicle = z.infer<typeof ElectricVehicle>;
export const ElectricVehicle = z.intersection(
  z.object({
    id: z.number(),
    brand: z.string(),
    model: z.string(),
    engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
    totalMileage: z.number(),
  }),
  z.object({
    energyConsumption: z.number(),
    batteryCapacity: z.number(),
    currentCharge: z.number(),
  })
);

export type VehicleInput = z.infer<typeof VehicleInput>;
export const VehicleInput = z.object({
  brand: z.string(),
  model: z.string(),
  engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
  totalMileage: z.union([z.number(), z.undefined()]).optional(),
});

export type GasolineVehicleInput = z.infer<typeof GasolineVehicleInput>;
export const GasolineVehicleInput = z.intersection(
  z.object({
    brand: z.string(),
    model: z.string(),
    engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
    totalMileage: z.union([z.number(), z.undefined()]).optional(),
  }),
  z.object({
    fuelConsumption: z.number(),
    tankCapacity: z.number(),
    currentFuelLevel: z.union([z.number(), z.undefined()]).optional(),
  })
);

export type ElectricVehicleInput = z.infer<typeof ElectricVehicleInput>;
export const ElectricVehicleInput = z.intersection(
  z.object({
    brand: z.string(),
    model: z.string(),
    engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
    totalMileage: z.union([z.number(), z.undefined()]).optional(),
  }),
  z.object({
    energyConsumption: z.number(),
    batteryCapacity: z.number(),
    currentCharge: z.union([z.number(), z.undefined()]).optional(),
  })
);

export type Error = z.infer<typeof Error>;
export const Error = z.object({
  code: z.string(),
  message: z.string(),
  details: z.union([z.array(z.string()), z.undefined()]).optional(),
});

export type get_GetAllVehicles = typeof get_GetAllVehicles;
export const get_GetAllVehicles = {
  method: z.literal('GET'),
  path: z.literal('/vehicles'),
  requestFormat: z.literal('json'),
  parameters: z.object({
    query: z.object({
      engineType: z
        .union([z.literal('gasoline'), z.literal('electric')])
        .optional(),
      brand: z.string().optional(),
    }),
  }),
  response: z.array(
    z.object({
      id: z.number(),
      brand: z.string(),
      model: z.string(),
      engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
      totalMileage: z.number(),
    })
  ),
};

export type post_AddVehicle = typeof post_AddVehicle;
export const post_AddVehicle = {
  method: z.literal('POST'),
  path: z.literal('/vehicles'),
  requestFormat: z.literal('json'),
  parameters: z.object({
    body: z.object({
      brand: z.string(),
      model: z.string(),
      engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
      totalMileage: z.union([z.number(), z.undefined()]).optional(),
    }),
  }),
  response: z.object({
    id: z.number(),
    brand: z.string(),
    model: z.string(),
    engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
    totalMileage: z.number(),
  }),
};

export type get_GetVehicleById = typeof get_GetVehicleById;
export const get_GetVehicleById = {
  method: z.literal('GET'),
  path: z.literal('/vehicles/{vehicleId}'),
  requestFormat: z.literal('json'),
  parameters: z.object({
    path: z.object({
      vehicleId: z.number(),
    }),
  }),
  response: z.object({
    id: z.number(),
    brand: z.string(),
    model: z.string(),
    engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
    totalMileage: z.number(),
  }),
};

export type delete_DeleteVehicle = typeof delete_DeleteVehicle;
export const delete_DeleteVehicle = {
  method: z.literal('DELETE'),
  path: z.literal('/vehicles/{vehicleId}'),
  requestFormat: z.literal('json'),
  parameters: z.object({
    path: z.object({
      vehicleId: z.number(),
    }),
  }),
  response: z.unknown(),
};

export type put_RefuelVehicle = typeof put_RefuelVehicle;
export const put_RefuelVehicle = {
  method: z.literal('PUT'),
  path: z.literal('/vehicles/{vehicleId}/refuel'),
  requestFormat: z.literal('json'),
  parameters: z.object({
    path: z.object({
      vehicleId: z.number(),
    }),
    body: z.object({
      liters: z.number(),
    }),
  }),
  response: z.intersection(
    z.object({
      id: z.number(),
      brand: z.string(),
      model: z.string(),
      engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
      totalMileage: z.number(),
    }),
    z.object({
      fuelConsumption: z.number(),
      tankCapacity: z.number(),
      currentFuelLevel: z.number(),
    })
  ),
};

export type put_ChargeVehicle = typeof put_ChargeVehicle;
export const put_ChargeVehicle = {
  method: z.literal('PUT'),
  path: z.literal('/vehicles/{vehicleId}/charge'),
  requestFormat: z.literal('json'),
  parameters: z.object({
    path: z.object({
      vehicleId: z.number(),
    }),
    body: z.object({
      kwh: z.number(),
    }),
  }),
  response: z.intersection(
    z.object({
      id: z.number(),
      brand: z.string(),
      model: z.string(),
      engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
      totalMileage: z.number(),
    }),
    z.object({
      energyConsumption: z.number(),
      batteryCapacity: z.number(),
      currentCharge: z.number(),
    })
  ),
};

export type put_AddMileage = typeof put_AddMileage;
export const put_AddMileage = {
  method: z.literal('PUT'),
  path: z.literal('/vehicles/{vehicleId}/mileage'),
  requestFormat: z.literal('json'),
  parameters: z.object({
    path: z.object({
      vehicleId: z.number(),
    }),
    body: z.object({
      kilometers: z.number(),
    }),
  }),
  response: z.object({
    id: z.number(),
    brand: z.string(),
    model: z.string(),
    engineType: z.union([z.literal('gasoline'), z.literal('electric')]),
    totalMileage: z.number(),
  }),
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    '/vehicles': get_GetAllVehicles,
    '/vehicles/{vehicleId}': get_GetVehicleById,
  },
  post: {
    '/vehicles': post_AddVehicle,
  },
  delete: {
    '/vehicles/{vehicleId}': delete_DeleteVehicle,
  },
  put: {
    '/vehicles/{vehicleId}/refuel': put_RefuelVehicle,
    '/vehicles/{vehicleId}/charge': put_ChargeVehicle,
    '/vehicles/{vehicleId}/mileage': put_AddMileage,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod['get'];
export type PostEndpoints = EndpointByMethod['post'];
export type DeleteEndpoints = EndpointByMethod['delete'];
export type PutEndpoints = EndpointByMethod['put'];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = 'post' | 'put' | 'patch' | 'delete';
export type Method = 'get' | 'head' | 'options' | MutationMethod;

type RequestFormat = 'json' | 'form-data' | 'form-url' | 'binary' | 'text';

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  parameters?: TConfig['parameters'];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig['response'];
  responseHeaders?: TConfig['responseHeaders'];
};

export type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined
) => Promise<Response>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> =
  RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = '';

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  parseResponse = async <T>(response: Response): Promise<T> => {
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return response.json();
    }
    return response.text() as unknown as T;
  };

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('get', this.baseUrl + path, params[0]).then(
      (response) => this.parseResponse(response)
    ) as Promise<z.infer<TEndpoint['response']>>;
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('post', this.baseUrl + path, params[0]).then(
      (response) => this.parseResponse(response)
    ) as Promise<z.infer<TEndpoint['response']>>;
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<
    Path extends keyof DeleteEndpoints,
    TEndpoint extends DeleteEndpoints[Path],
  >(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('delete', this.baseUrl + path, params[0]).then(
      (response) => this.parseResponse(response)
    ) as Promise<z.infer<TEndpoint['response']>>;
  }
  // </ApiClient.delete>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('put', this.baseUrl + path, params[0]).then(
      (response) => this.parseResponse(response)
    ) as Promise<z.infer<TEndpoint['response']>>;
  }
  // </ApiClient.put>

  // <ApiClient.request>
  /**
   * Generic request method with full type-safety for any endpoint
   */
  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<
      z.infer<TEndpoint extends { parameters: infer Params } ? Params : never>
    >
  ): Promise<
    Omit<Response, 'json'> & {
      /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/json) */
      json: () => Promise<
        TEndpoint extends { response: infer Res } ? Res : never
      >;
    }
  > {
    return this.fetcher(
      method,
      this.baseUrl + (path as string),
      params[0] as EndpointParameters
    );
  }
  // </ApiClient.request>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? '');
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
