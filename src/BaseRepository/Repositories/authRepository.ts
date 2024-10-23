import BaseRepository from "../BaseRepository";

const resource = "/users";
interface body {
  email: string;
  password: string;
}

const authRepository = {
  Signup(body: body) {
    return BaseRepository.post(`${resource}`, body);
  },
  Signin(body: body) {
    return BaseRepository.get(
      `${resource}?email=${body.email}&&password=${body.password}`
    );
  },
  ResetPassword(password: string) {
    return BaseRepository.put(`${resource}`, password);
  },
};
export default authRepository;
