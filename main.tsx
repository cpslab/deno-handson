import { serve } from "https://deno.land/std@0.167.0/http/server.ts";

serve((_request) => {
  return new Response("各自決め台詞をどうぞ 😏");
});
