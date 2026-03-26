import type React from "react";

export function NonVegIcon({
  width = 20,
  height = 20,
  strokeWidth = 2,
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M9.7 8.6c1.7-1.7 4.5-1.7 6.2 0l.6.6c1.7 1.7 1.7 4.5 0 6.2l-3.2 3.2c-1.7 1.7-4.5 1.7-6.2 0l-.6-.6c-1.7-1.7-1.7-4.5 0-6.2l3.2-3.2Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.8 15.9 4 17.7m0 0a1 1 0 0 0 0 1.4l.9.9a1 1 0 0 0 1.4 0L8 18.2M4 17.7 6.3 20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
