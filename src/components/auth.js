import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const WithAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem('key_access_token');

      if (!accessToken) {
        router.push('/');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  // Add a display name for better debugging
  AuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthComponent;
};

export default WithAuth;
