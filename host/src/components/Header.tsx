import { navigate, usePathname } from '../hooks/usePathname';
import { isUnder } from '../utils';

const links = [
  { href: '/', label: 'Host' },
  { href: '/remote', label: 'Remote React 1' },
  { href: '/remote-react', label: 'Remote React 2' },
  { href: '/remote-vue', label: 'Remote Vue' },
  { href: '/remote-ang', label: 'Remote Angular' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="host-header">
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={isUnder(pathname, href) ? 'active' : undefined}
          onClick={(event) => navigate(event, href)}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Header;
