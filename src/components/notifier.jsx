'use client';
import React, { useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
;

export const TOAST_SUCCESS = 'toast_success';
export const TOAST_FAILURE = 'toast_failure';

const Notifier = () => {
    const { isLoading } = useSelector((state) => state.working)
    const { toastData } = useSelector((state) => state.working)
    const loadingRef = useRef(null)

    useEffect(() => {
        if (isLoading) {
            loadingRef.current.continuousStart();
        }
        else {
            loadingRef.current.complete();
        }
    }, [isLoading])

    useEffect(() => {
        switch (toastData.type) {
            case TOAST_SUCCESS:
                toast.success(toastData.message);
                break;
            case TOAST_FAILURE:
                toast.error(toastData.message);
                break;
        }
    }, [toastData])
    return (
        <div>
            <LoadingBar color='#7380ec' ref={loadingRef} />
            <Toaster />
        </div>
    );
};

export default Notifier;