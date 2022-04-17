import { toast } from 'react-toastify';

export const toastSettings = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: false,
  pauseOnHover: false,
};

export function successToast(text: string) {
  return toast.success(text);
}

export function errorToast(text: string) {
  return toast.error(text);
}

export function infoToast(text: string) {
  return toast.info(text);
}
