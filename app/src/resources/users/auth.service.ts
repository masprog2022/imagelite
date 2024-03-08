import { AccessToken, Credentials } from "./user.resources";

class AuthService {
  baseURL: string = "http://localhost:8081/v1/users";
  static AUTH_PARAM: string = "_auth";

  async authenticate(credentials: Credentials): Promise<AccessToken> {
    const response = await fetch(this.baseURL + "/auth", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 401) {
      throw new Error("User or password are incorrect!");
    }

    return await response.json();
  }
}

export const useAuth = () => new AuthService();
