import React, { useState } from 'react';
import SideNav from './SideNav';

const ParentComponent = () => {
    const [navData, setNavData] = useState([
        { id: 1, label: 'Home', link: '/' },
        { id: 2, label: 'About', link: '/about' },
        { id: 3, label: 'Contact', link: '/contact' },
    ]);

    const handleRemove = (item) => {
        setNavData((prev) => prev.filter((navItem) => navItem.id !== item.id));
    };

    const handleClone = (item) => {
        const newItem = { ...item, id: Date.now() }; // Clone with a unique id
        setNavData((prev) => [...prev, newItem]);
    };

    return (
        <div>
            <h1>Welcome to My App</h1>
            <SideNav
                items={navData}
                onRemove={handleRemove}
                onClone={handleClone}
            />
        </div>
    );
};

export default ParentComponent;
