import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaXTwitter, FaTelegram } from 'react-icons/fa6';

interface Social {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Social[] = [
    {
        name: 'Github',
        url: 'https://github.com/filiksyos',
        icon: FaGithub,
    },
    {
        name: 'X',
        url: 'https://x.com/iammartillon', 
        icon: FaXTwitter,
    },
    {
        name: 'LinkedIn',
        url: ' https://www.linkedin.com/in/filiksyos-destaw-9241a2272',
        icon: FaLinkedin,
    },
    {
        name: 'Telegram',
        url: 'https://web.telegram.org/k/#@filiksyos1', 
        icon: FaTelegram,
    },
];

export default socials;
