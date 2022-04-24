import SignupForm from '../../Components/SignupPage/SignupForm';

import useScrollToTop from '../../Hooks/useScrollToTop';

const SignUp = () => {
    useScrollToTop();

    return (
        <>
            <div className="flex flex-1 flex-col justify-center bg-gray-50">
                <div className="mx-4 mb-8 mt-4 flex items-center justify-center py-5 sm:mx-6 sm:px-4">
                    <div className="flex w-full items-center justify-center lg:w-3/5">
                        <div className="flex w-full max-w-xl items-center justify-center rounded bg-white pb-10 shadow-2xl lg:p-8">
                            <SignupForm />
                        </div>
                    </div>
                    <div className="m-auto hidden w-full max-w-md lg:block lg:w-2/5">
                        <img
                            src="/images/signup.svg"
                            alt=""
                            loading="lazy"
                            className="m-auto block w-5/6"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
