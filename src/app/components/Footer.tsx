import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BRAND, PERSONAL_INFO } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-offwhite py-8 border-t border-navy/10 text-center text-navy/60">
      <div className="flex justify-center gap-6 mb-6">
        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors">
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {BRAND.name} | {PERSONAL_INFO.fullName}. All rights reserved.</p>
    </footer>
  );
}