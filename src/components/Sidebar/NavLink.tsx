import { ElementType } from "react";
import { Icon, Link as ChakrLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps){
  return (
    <ActiveLink href={href} passHref>
      <ChakrLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakrLink>
    </ActiveLink>
  );
}