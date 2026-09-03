import { Camera } from "@phosphor-icons/react";

/* Labeled placeholder for imagery Emily has not provided yet.
   Never replaced with generated photography (user mandate). */
export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div role="img" aria-label={`${label} - photography coming soon`} className={`placeholder-tile ${className}`}>
      <span className="inline-flex text-sage">
        <Camera size={30} weight="thin" aria-hidden="true" />
      </span>
      <p className="ph-note">Photography coming soon</p>
    </div>
  );
}