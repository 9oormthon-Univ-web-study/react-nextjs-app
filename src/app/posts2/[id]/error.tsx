'use client';

import React, { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div>
            <p>뭔가 잘못됨</p>
            <button onClick={reset}>리셋하기?</button>
        </div>
    );
};

export default Error;
