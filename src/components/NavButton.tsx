import { useEffect, useState } from "react";
import Button from "./Button";


function NavButton() {
    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('https://localhost:7237/user/checkauth', {
                    method: 'GET',
                    credentials: 'include'
                });
  
                if (response.ok) {
                    setAuthorized(true);
                } else {
                    setAuthorized(false);
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
                setAuthorized(false);
            }
        };
        checkAuth();
      }, []);

    if (authorized) {
        return (
            <>
                <Button data-testid="mypage-button-navbar" path="/mypage" color="green" text="Min side" />
            </>
        )
    } else {
        return (
            <>
                <Button data-testid="apply-button-navbar" path="/apply" color="green" text="Send søknad" />
            </>
        )
    }
}

export default NavButton;