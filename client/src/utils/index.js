export const checkToken = () => {
    return localStorage.getItem('TOKEN') ? true : false ;
};