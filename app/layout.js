import './style.css'; 

export const metadata = {
  title: 'iStore - Apple forhandler Danmark',
  description: 'Danmarks bedste Apple forhandler',
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        {children}
      </body>
    </html>
  );
}