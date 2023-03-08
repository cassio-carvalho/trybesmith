interface LoginResponse {
  status:number;
  token?: string;
  error?: unknown
}

export default LoginResponse;