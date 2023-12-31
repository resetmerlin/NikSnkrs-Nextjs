import type { Metadata } from 'next';
import Providers from '../store/provider';
import { oswald } from '../font';
import { HeaderLayout } from '@/components';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={oswald.className}>
        <Providers>
          <HeaderLayout>{children}</HeaderLayout>
        </Providers>
      </body>
    </html>
  );
}
