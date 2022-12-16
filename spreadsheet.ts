import { google } from "npm:googleapis";

const keyFilePath = "key.json";
const spreadsheetId = "1CSW2Z9WGrpkQ7E0Gas93jL5k-woAUGb5ixK-t0nlJGk";

const GOOGLE_KEY_JSON = Deno.env.get("GOOGLE_KEY_JSON");

if (GOOGLE_KEY_JSON === undefined) {
  throw new Error("環境変数 GOOGLE_KEY_JSON が未指定です!");
}

await Deno.writeTextFile(keyFilePath, GOOGLE_KEY_JSON);

const auth = new google.auth.GoogleAuth({
  keyFile: keyFilePath,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const valuesResponse = await google.sheets("v4").spreadsheets.values.get({
  auth,
  range: "target!A1:D9",
  spreadsheetId: spreadsheetId,
});

console.log("valuesResponse", valuesResponse);
