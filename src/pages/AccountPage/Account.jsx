import { useEffect, useState } from 'react';
import LoaderMain from '../../Components/UI/Loader/LoaderMain/LoaderMain';

import { Link } from 'react-router-dom';

import useScrollToTop from '../../Hooks/useScrollToTop';

const Account = () => {
    useScrollToTop();

    const [loading, setLoading] = useState(false);

    const loadingHandler = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1700);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        loadingHandler();
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <LoaderMain />
                </>
            ) : (
                <div className="my-4 flex w-full flex-1 flex-col items-center justify-center bg-gray-50">
                    <h1 className="mb-5 text-center text-3xl font-bold tracking-wide text-gray-700">
                        Under Contruction
                    </h1>
                    <div className="text-center">
                        <Link
                            to="/"
                            className="inline-block rounded bg-indigo-500 px-4 py-2 font-semibold text-white"
                        >
                            Go to Home
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Account;
