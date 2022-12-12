import { serve } from "https://deno.land/std@0.167.0/http/server.ts";

serve((_request) => {
  return new Response(
    `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deno で作成したHTTPサーバー</title>
    
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        height: 100%;
      }

      body {
        height: 100%;
        margin: 0;
        font-size: 64px;
        background: skyblue;
        display: grid;
        place-content: center;
      }
    </style>
  </head>
  <body>
    やあ
  </body>
</html>`,
    {
      headers: { "content-type": "text/html; charset=utf-8" },
    },
  );
});
