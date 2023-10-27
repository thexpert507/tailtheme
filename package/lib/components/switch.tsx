import { useId } from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (check: boolean) => void;
  disabled?: boolean;
}
export function Switch({ checked, onChange, disabled }: SwitchProps) {
  const id = useId();
  return (
    <label htmlFor={id} className="relative inline-flex flex-shrink-0 cursor-pointer items-center">
      <input
        type="checkbox"
        id={id}
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="h-6 w-11 rounded-full bg-gray-100 dark:bg-stone-700 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white dark:after:bg-gray-300 after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary-600 dark:peer-checked:bg-primary-600/80 peer-checked:after:translate-x-full peer-checked:after:border-white dark:peer-checked:after:bg-gray-100 peer-focus:ring-4 dark:peer-focus:ring-2 peer-focus:ring-primary-200  dark:peer-focus:ring-primary-200/60 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50"></div>
    </label>
  );
}
