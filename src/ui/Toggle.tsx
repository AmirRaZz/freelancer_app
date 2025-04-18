import { Switch } from "@headlessui/react";

function Toggle({
  label,
  enabled,
  onChange,
}: {
  label: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <Switch
        checked={enabled}
        onChange={onChange}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-secondary-200 transition-colors data-[checked]:bg-primary-900"
      >
        <span className="sr-only">{label}</span>
        <span className="size-4 -translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-6" />
      </Switch>
      <span className="text-sm">{label}</span>
    </div>
  );
}
export default Toggle;
