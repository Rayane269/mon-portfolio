import {
  IoCall, IoGlobeOutline, IoLocation, IoLogoBehance, IoLogoBitbucket, IoLogoCodepen,
  IoLogoDiscord, IoLogoDribbble, IoLogoFacebook, IoLogoFoursquare, IoLogoGithub,
  IoLogoGitlab, IoLogoInstagram, IoLogoLinkedin, IoLogoMedium, IoLogoPinterest,
  IoLogoReddit, IoLogoRss, IoLogoSkype, IoLogoSlack, IoLogoSnapchat, IoLogoSoundcloud,
  IoLogoStackoverflow, IoLogoTiktok, IoLogoTumblr, IoLogoTwitter, IoLogoVimeo,
  IoLogoVk, IoLogoWhatsapp, IoLogoYoutube, IoMail,
} from "react-icons/io5";

const Social = ({ source, className }) => {
  // Liste de correspondance entre les noms dans config et les icônes
  const iconMap = {
    facebook: <IoLogoFacebook />,
    twitter: <IoLogoTwitter />,
    instagram: <IoLogoInstagram />,
    youtube: <IoLogoYoutube />,
    linkedin: <IoLogoLinkedin />,
    github: <IoLogoGithub />,
    gitlab: <IoLogoGitlab />,
    discord: <IoLogoDiscord />,
    slack: <IoLogoSlack />,
    stackoverflow: <IoLogoStackoverflow />,
    medium: <IoLogoMedium />,
    codepen: <IoLogoCodepen />,
    bitbucket: <IoLogoBitbucket />,
    dribbble: <IoLogoDribbble />,
    behance: <IoLogoBehance />,
    pinterest: <IoLogoPinterest />,
    soundcloud: <IoLogoSoundcloud />,
    tumblr: <IoLogoTumblr />,
    reddit: <IoLogoReddit />,
    vk: <IoLogoVk />,
    whatsapp: <IoLogoWhatsapp />,
    snapchat: <IoLogoSnapchat />,
    vimeo: <IoLogoVimeo />,
    tiktok: <IoLogoTiktok />,
    foursquare: <IoLogoFoursquare />,
    skype: <IoLogoSkype />,
    website: <IoGlobeOutline />,
    rss: <IoLogoRss />,
    address: <IoLocation />,
  };

  return (
    <ul className={className}>
      {Object.keys(source).map((key) => {
        const link = source[key];
        if (!link) return null; // Si le lien est vide, on n'affiche rien

        // Gestion spéciale pour l'Email
        if (key === "email") {
          return (
            <li key={key} className="inline-block">
              <a aria-label="email" href={`mailto:${link}`} className="p-2 block">
                <IoMail />
              </a>
            </li>
          );
        }

        // Gestion spéciale pour le Téléphone
        if (key === "phone") {
          return (
            <li key={key} className="inline-block">
              <a aria-label="telephone" href={`tel:${link}`} className="p-2 block">
                <IoCall />
              </a>
            </li>
          );
        }

        // Pour tous les autres réseaux sociaux
        if (iconMap[key]) {
          return (
            <li key={key} className="inline-block">
              <a
                aria-label={key}
                href={link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="p-2 block hover:text-primary transition-colors"
              >
                {iconMap[key]}
              </a>
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default Social;