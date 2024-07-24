"use client";
interface ActiveCardsComponentProps {
  title: string;
  description: string;
}

export default function ActiveCards({
  title,
  description,
}: ActiveCardsComponentProps) {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}
