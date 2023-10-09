import { twMerge } from "tailwind-merge";
import { MODAL_SIZES } from "../utils";
import { Box } from "./box";
import { Button } from "./button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  enableConfirm?: boolean;
  enableCancel?: boolean;
  confirmText?: string;
  cancelText?: string;
  size?: keyof typeof MODAL_SIZES;
}
export function Modal(props: ModalProps) {
  return (
    <>
      <div
        className={twMerge("inset-0 z-10 bg-secondary-700/50", !props.open ? "hidden" : "fixed")}
      ></div>
      <div
        className={twMerge(
          "inset-0 z-50 flex items-center justify-center p-4 sm:p-0",
          !props.open ? "hidden" : "fixed"
        )}
      >
        <div
          className={twMerge(
            "mx-auto overflow-hidden rounded-lg bg-white dark:bg-stone-900 shadow-xl dark:shadow-gray-700 sm:w-full max-h-[calc(100vh_-_2rem)] overflow-y-auto",
            props.size ? MODAL_SIZES[props.size] : MODAL_SIZES.xl
          )}
        >
          <div className="relative p-6">
            <button
              type="button"
              onClick={props.onClose}
              className="absolute top-4 right-4 rounded-lg p-1 text-center font-medium text-secondary-500 dark:text-secondary-100 transition-all hover:bg-secondary-100 dark:hover:text-secondary-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            {props.title && (
              <h3 className="text-lg font-medium text-secondary-900 dark:text-secondary-100">
                {props.title}
              </h3>
            )}
            <div className="mt-2 dark:text-gray-100">{props.children}</div>
          </div>

          {(props.enableCancel || props.enableConfirm) && (
            <Box full gap="2xl" justify="end" paddingX="md" paddingY="md">
              {props.enableCancel && (
                <Button
                  type="button"
                  onClick={props.onCancel}
                  variant="contained"
                  color="gray"
                  round="md"
                >
                  {props.cancelText || "Cancel"}
                </Button>
              )}
              {props.enableConfirm && (
                <Button
                  type="button"
                  onClick={props.onConfirm}
                  variant="contained"
                  color="primary"
                  round="md"
                >
                  {props.confirmText || "Confirm"}
                </Button>
              )}
            </Box>
          )}
        </div>
      </div>
    </>
  );
}
