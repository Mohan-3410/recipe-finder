import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';

const UserAvatar = ({ userData }) => {
    const renderAvatar = () => {
        if (userData) {
            if (userData.avatar && userData.avatar.url) {
                // Display the user's avatar
                return (
                    <Image
                        src={userData.avatar.url}
                        alt={"logo of " + userData.name}
                        width={36}
                        height={36}
                        className="rounded-full"
                    />
                );
            } else if (userData.name) {
                // Display the first character of the user's name
                return (
                    <div className="flex items-center justify-center bg-primary-foreground text-primary rounded-full w-8 h-8">
                        {userData.name.charAt(0).toUpperCase()}
                    </div>
                );
            }
        }

        // Fallback to the default user icon
        return <FaUserCircle size={32} />;
    };

    return (
        <div>
            {renderAvatar()}
        </div>
    );
};

export default UserAvatar;
