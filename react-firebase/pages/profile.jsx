import React from 'react';


const Profile = () => {
    function onLogout() {
        auth.signOut();
        navigate("/sign-in");
    }

    const handleLogout = () => {


        return (
            <>
                <nav>
                    <p>
                        Welcome To your Profile page
                    </p>

                    <div>
                        <button onClick={onLogout}>
                            Logout
                        </button>
                    </div>
                </nav>
            </>
        )
    }
}

export default Profile;