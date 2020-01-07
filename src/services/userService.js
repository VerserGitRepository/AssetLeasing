import http from "./httpService";

const apiLoginEndpoint = "https://customers.verser.com.au/JMSLoginManager/Login/AuthenticateUser";

export function register(user) {
    return http.post(apiLoginEndpoint, {
        username: user.username,
        password: user.password
    });
}