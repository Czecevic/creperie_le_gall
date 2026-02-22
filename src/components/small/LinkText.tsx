export const LinkText = ({
  link,
  linkName,
}: {
  link: string;
  linkName: string;
}) => {
  return (
    <li>
      <a
        href={link}
        className="font-display text-lg sm:text-xl font-semibold uppercase text-primary tracking-wide hover:text-accent transition-colors"
      >
        {linkName}
      </a>
    </li>
  );
};
