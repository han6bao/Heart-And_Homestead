import { Camera } from "@phosphor-icons/react";

/* Labeled placeholder for imagery Emily has not provided yet.
   Never replaced with generated photography (user mandate). */
export function PhotoPlaceholder({
  label,
  className = "",
  note = "Photography coming soon",
}: {
  label: string;
  className?: string;
  note?: string;
}) {
  return (
    <div role="img" aria-label={`${label} - photography coming soon`} className={`placeholder-tile ${className}`}>
      <span className="inline-flex text-sage">
        <Camera size={30} weight="thin" aria-hidden="true" />
      </span>
      <p className="ph-note">{note}</p>
    </div>
  );
}