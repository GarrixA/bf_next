/* eslint-disable no-console */
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
  iat: number;
  is_confirmed: boolean;
}

export function decodeToken(cookieName: string): any {
  const token = cookieName;
  if (token) {
    try {
      const decodedToken: DecodedToken = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error("Failed to decode token:", error);
      return null;
    }
  } else {
    console.warn("Token not found in cookies");
    return null;
  }
}
