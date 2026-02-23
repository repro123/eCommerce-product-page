import { useEffect } from "react";

function Toast({ toast, onDone, duration = 3000 }) {
  useEffect(() => {
    if (!toast) return;

    const t = setTimeout(() => onDone && onDone(), duration);
    return () => clearTimeout(t);
  }, [onDone, duration, toast]);

  if (!toast) return null;

  const bg =
    toast.type === "success"
      ? "bg-green-500"
      : toast.type === "warning"
        ? "bg-yellow-500"
        : "bg-red-800";

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-80 rounded-xl shadow-2xl overflow-hidden bg-pale-primary">
      <div
        className={`px-4 py-3 text-sm font-medium flex items-center gap-2 text-primary `}
      >
        <span className={`${bg} size-3 rounded-full inline-block`}></span>
        {toast.message}
      </div>

      <div className="h-1 bg-primary animate-shrink" />
    </div>
  );
}

export default Toast;
