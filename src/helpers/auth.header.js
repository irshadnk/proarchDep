export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    console.log('user in authHeader -- ',user)
    if (user && user.token) {
        return { 'authorization': 'Bearer ' + user.token, 'Content-Type': 'application/json' };
    } else {
        return {};
    }
}