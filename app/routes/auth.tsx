import { useEffect } from "react";
import { usePuterStore } from "../lib/puter";
import { useLocation, useNavigate } from "react-router";

export const meta = () => {
    return [
        { title: "Login | RezMe.ai" },
        {
            name: "description",
            content: "Log into your account to get instant feedback on your resume.",
        },
    ];
}

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();
    useEffect(() => {
        if (auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next]);
    return (
        <main className="bg-[url('/images/auth-bg.png')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-3xl font-bold">Welcome to RezMe.ai</h1>
                        <p className="text-lg text-gray-500">Log in to get instant feedback on your resume.</p>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signing you in...</p>

                            </button>


                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}><p>Log out</p></button>

                                ) : (
                                    <button className="auth-button" onClick={auth.signIn}><p>Log in</p></button>

                                )}

                            </>
                        )}

                    </div>


                </section>

            </div>

        </main>
    );
}

export default Auth;
