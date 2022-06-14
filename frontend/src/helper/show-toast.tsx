import { toast } from "react-toastify";

export function showToast(text: string) {
    toast(text, {
        type: "success",
        closeButton: false,
        delay: 0,
        autoClose: 5000,
        style: {
            width: 50,
            height: 40
        },
        position: "top-right"
    });
}

export function showWarningToast(text: string) {
    toast(text, {
        type: "warning",
        closeButton: false,
        delay: 0,
        autoClose: 5000,
        style: {
            width: 50,
            height: 40
        },
        position: "top-right"
    });
}

export function showErrorToast(text: string) {
    toast(text, {
        type: "error",
        closeButton: false,
        delay: 0,
        autoClose: 5000,
        style: {
            width: 50,
            height: 40
        },
        position: "top-right"
    });
}
