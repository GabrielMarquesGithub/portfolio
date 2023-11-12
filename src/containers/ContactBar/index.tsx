import * as S from "./styles";

import EmailIcon from "../../assets/icons/social/email.svg?react";
import GithubIcon from "../../assets/icons/social/github.svg?react";
import LinkedinIcon from "../../assets/icons/social/linkedin.svg?react";
import WhatsappIcon from "../../assets/icons/social/whatsapp.svg?react";

import { IconLink } from "../../components/IconLink";

function ContactBar() {
  return (
    <S.ContactBar>
      <IconLink
        className="contact-icon email-icon"
        icon={<EmailIcon />}
        href="mailto:gabriel.magalhaes.dev@gmail.com"
        IconAriaLabel="Ícone de carta"
        linkAriaLabel="Ir para email"
      />
      <IconLink
        className="contact-icon github-icon"
        icon={<GithubIcon />}
        href="https://github.com/NikisGabriel"
        IconAriaLabel="Ícone do github"
        linkAriaLabel="Ir para github"
      />
      <IconLink
        className="contact-icon linkedin-icon"
        icon={<LinkedinIcon />}
        href="https://www.linkedin.com/in/gabrielmarquesmagalhaes/"
        IconAriaLabel="Ícone do linkedin"
        linkAriaLabel="Ir para linkedin"
      />
      <IconLink
        className="contact-icon whatsapp-icon"
        icon={<WhatsappIcon />}
        href="https://api.whatsapp.com/send/?phone=5538999656591&text&type=phone_number&app_absent=0"
        IconAriaLabel="Ícone do whatsapp"
        linkAriaLabel="Ir para whatsapp"
      />
    </S.ContactBar>
  );
}

export { ContactBar };
