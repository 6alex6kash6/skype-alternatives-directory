import { headers } from 'next/headers';
import SoftwareDetail from './SoftwareDetail';

export default function SoftwareDetailWrapper() {
  const headersList = headers();
  const isMobile = headersList.get('x-is-mobile') === '1';
  
  return <SoftwareDetail initialIsMobile={isMobile} />;
} 