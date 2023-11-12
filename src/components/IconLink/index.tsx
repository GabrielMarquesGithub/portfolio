import { IIconLinkProps } from "./types";

import { Icon } from "../Icon";
import { Link } from "../Link";

function IconLink({
  icon,
  className,
  $color,
  IconAriaLabel,
  href,
  linkAriaLabel,
}: IIconLinkProps) {
  return (
    <Link href={href} aria-label={linkAriaLabel} target="_blank">
      <Icon
        className={className}
        $size="huge"
        aria-label={IconAriaLabel}
        $color={$color}
        icon={icon}
      />
    </Link>
  );
}

export { IconLink };
