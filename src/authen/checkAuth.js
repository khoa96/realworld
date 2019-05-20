export const checkAuthen = () => {
    if (localStorage.getItem('token')) {
        return true;
    } else {
        return false;
    }
}