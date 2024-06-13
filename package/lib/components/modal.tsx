import { twMerge } from "tailwind-merge";
import { ANIMATIONS, Animations, MODAL_SIZES, ROUNDED } from "../utils";
import { Box } from "./box";
import { Button } from "./button";
import { Fragment } from "react";

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
  round?: keyof typeof ROUNDED;
  disableOutsideClose?: boolean;
  testId?: string;
  animation?: Animations;
}
export function Modal(props: ModalProps) {
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (props.disableOutsideClose) return;
    props.onClose();
  };

  return (
    <Fragment>
      <div
        className={twMerge(
          "inset-0 z-50 backdrop-blur-sm transition-all duration-150",
          !props.open ? "hidden" : "fixed",
          props.animation && ANIMATIONS[props.animation]
        )}></div>
      <div
        data-testid={props.testId}
        onClick={handleOutsideClick}
        className={twMerge(
          "inset-0 z-50 flex items-center justify-center p-4 sm:p-0",
          !props.open ? "hidden" : "fixed"
        )}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={twMerge(
            "mx-auto overflow-hidden bg-background-primary border border-background-secondary shadow-xl sm:w-full max-h-[calc(100vh_-_2rem)] overflow-y-auto",
            props.size ? MODAL_SIZES[props.size] : MODAL_SIZES.xl,
            props.round ? ROUNDED[props.round] : ROUNDED.md,
            props.animation && ANIMATIONS[props.animation]
          )}>
          <div className="relative p-6">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                props.onClose();
              }}
              className="absolute top-4 right-4 rounded-lg p-1 text-center font-medium text-background-contrast transition-all hover:bg-background-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            {props.title && (
              <h3 className="text-lg font-medium text-background-contrast">{props.title}</h3>
            )}
            <div className="mt-2 text-background-contrast">{props.children}</div>
          </div>

          {(props.enableCancel || props.enableConfirm) && (
            <Box full gap="2xl" justify="end" paddingX="md" paddingY="md">
              {props.enableCancel && (
                <Button
                  type="button"
                  stopPropagation
                  onClick={props.onCancel}
                  variant="contained"
                  color="accent"
                  round="md">
                  {props.cancelText || "Cancel"}
                </Button>
              )}
              {props.enableConfirm && (
                <Button
                  type="button"
                  stopPropagation
                  onClick={props.onConfirm}
                  variant="contained"
                  color="primary"
                  round="md">
                  {props.confirmText || "Confirm"}
                </Button>
              )}
            </Box>
          )}
        </div>
      </div>
    </Fragment>
  );
}
