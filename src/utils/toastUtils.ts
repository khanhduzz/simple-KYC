import { toast } from 'react-toastify';

export const showSuccessToast = (message: string) => {
    toast.success(message, {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const showErrorToast = (message: string) => {
    toast.error(message, {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const showInfoToast = (message: string) => {
    toast.info(message, {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
