export const LiText = ({
  name,
  information,
}: {
  name: string;
  information: string;
}) => {
  return (
    <li className="py-2 border-b border-white/10 text-white/90 last:border-0">
      <strong className="text-primary font-semibold mr-2">{name}</strong>
      {information}
    </li>
  );
};
