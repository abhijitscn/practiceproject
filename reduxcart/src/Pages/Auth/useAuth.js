export default function useAuth(){
    const auth=sessionStorage.getItem('auth');
    return auth;
};