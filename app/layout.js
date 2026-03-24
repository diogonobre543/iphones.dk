import './style.css';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'iStore - Apple forhandler Danmark',
  description: 'Danmarks bedste Apple forhandler',
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}