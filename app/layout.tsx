import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/providers';
export const metadata: Metadata={title:{default:'Supreme Bakers — Islamabad',template:'%s — Supreme Bakers'},description:'Supreme Bakers — a modern Pakistani bakery in E-11, Islamabad. Cakes, pastries, breads, mithai, savouries and gifting.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><AppProvider>{children}</AppProvider>



</body></html>}
