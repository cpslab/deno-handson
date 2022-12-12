import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import React from "https://esm.sh/react@18.2.0?pin=v99";
import { renderToString } from "https://esm.sh/react-dom@18.2.0/server?pin=v99";

serve((_request) => {
  return new Response(
    "<!doctype html>" + renderToString(
      <html lang="ja">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Deno で作成したHTTPサーバー</title>

          <style>
            {`
      * {
        box-sizing: border-box;
      }

      html {
        height: 100%;
      }

      body {
        height: 100%;
        margin: 0;
        font-size: 16px;
        background: skyblue;
        display: grid;
        place-content: center;
      }`}
          </style>
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: `const loop = () => {
  document.body.textContent = "現在時刻: " + new Date().toISOString()
  requestAnimationFrame(loop);
}
loop();
`,
            }}
          >
          </script>
        </head>
        <body>
          現在時刻: {new Date().toISOString()}
        </body>
      </html>,
    ),
    {
      headers: { "content-type": "text/html; charset=utf-8" },
    },
  );
});
