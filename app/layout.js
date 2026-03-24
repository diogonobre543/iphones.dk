import './style.css'; 
import Script from 'next/script'; 

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {/* Se você tiver um Menu/Navbar fixo, coloque aqui */}
        
        {children} 

        {/* Carrega seu JS de forma segura. 
            Certifique-se de que o script.js esteja na pasta PUBLIC 
            
            para esse caminho funcionar! */}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}