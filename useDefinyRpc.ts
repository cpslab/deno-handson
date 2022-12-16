import { handleRequest } from "https://raw.githubusercontent.com/narumincho/definy/3e527ebb2bfb17f91ed44ecf76a48f31148d4cb8/deno-lib/definyRpc/server/definyRpc.ts";
import { requestObjectToSimpleRequest } from "https://raw.githubusercontent.com/narumincho/definy/3e527ebb2bfb17f91ed44ecf76a48f31148d4cb8/deno-lib/simpleRequestResponse/simpleRequest.ts";
import {
  simpleResponseToResponse,
} from "https://raw.githubusercontent.com/narumincho/definy/3e527ebb2bfb17f91ed44ecf76a48f31148d4cb8/deno-lib/simpleRequestResponse/simpleResponse.ts";
import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { createApiFunction } from "https://raw.githubusercontent.com/narumincho/definy/3e527ebb2bfb17f91ed44ecf76a48f31148d4cb8/deno-lib/definyRpc/core/apiFunction.ts";
import {
  DefinyRpcTypeInfo,
  Field,
  FunctionNamespace,
  Maybe,
  Namespace,
  Number,
  String,
  TypeBody,
  Unit,
} from "https://raw.githubusercontent.com/narumincho/definy/3e527ebb2bfb17f91ed44ecf76a48f31148d4cb8/deno-lib/definyRpc/core/coreType.ts";
import { Account } from "./generated/api/main.ts";

serve(async (request) => {
  const simpleRequest = await requestObjectToSimpleRequest(request);
  if (simpleRequest === undefined) {
    throw new Error("解釈できないリクエストだった");
  }
  const simpleResponse = await handleRequest({
    all: () => ({
      functionsList: [
        createApiFunction({
          namespace: FunctionNamespace.local(["main"]),
          description: "カスタムAPI Function",
          name: "hello",
          input: Unit.type(),
          output: String.type(),
          isMutation: false,
          needAuthentication: false,
          resolve: () => {
            return "hi!";
          },
        }),
        createApiFunction({
          namespace: FunctionNamespace.local(["main"]),
          description: "カスタムAPI Function",
          name: "useCustomType",
          input: Unit.type(),
          output: Account.type(),
          isMutation: false,
          needAuthentication: false,
          resolve: () => {
            return Account.from({
              name: "ラフィーア",
              age: 18,
            });
          },
        }),
      ],
      typeList: [
        DefinyRpcTypeInfo.from({
          namespace: Namespace.local(["main"]),
          name: "Account",
          description: "アカウント",
          attribute: Maybe.nothing(),
          parameter: [],
          body: TypeBody.product([
            Field.from({
              name: "name",
              description: "アカウント名",
              type: String.type(),
            }),
            Field.from({
              name: "age",
              description: "年齢",
              type: Number.type(),
            }),
          ]),
        }),
      ],
    }),
    codeGenOutputFolderPath: new URL(import.meta.resolve("./generated/")),
    name: "hansonTest",
    originHint: simpleRequest.url.origin,
  }, simpleRequest);
  if (simpleResponse === undefined) {
    return new Response(JSON.stringify({ error: "notFound..." }), {
      status: 404,
    });
  }
  return simpleResponseToResponse(simpleResponse);
});
