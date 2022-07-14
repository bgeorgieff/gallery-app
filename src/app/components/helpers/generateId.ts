import { Token } from "src/app/enums/uniqueToken.enum";

export const generateTokenString = () => {
  const characters = Token.tokenVars;
  const stringLength = Token.tokenLength;

  let token = "";
  const charactersLength = characters.length;
  for (let i = 0; i < stringLength; i++) {
    token += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return token;
};
