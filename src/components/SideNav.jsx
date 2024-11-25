import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { cloneItem } from '../reduxStore/navSlice';

const SideNav = () => {
    const items = useSelector((state) => state.nav.items);
    const dispatch = useDispatch();
    const [contextMenu, setContextMenu] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleContextMenu = (event, item) => {
        event.preventDefault();
        setSelectedItem(item);
        setContextMenu({
            x: event.clientX,
            y: event.clientY,
        });
    };

    const handleMenuOptionClick = (option) => {
        if (option === 'clone') {
            dispatch(cloneItem(selectedItem));
        }
        setContextMenu(null); // Hide context menu
    };

    const handleClickOutside = () => {
        setContextMenu(null); // Close menu on outside click
    };

    return (
        <div onClick={handleClickOutside} style={{ position: 'relative' }}>
            <nav>
                <ul>
                    {items.map((item) => (
                        <li
                            key={item.id}
                            onContextMenu={(event) => handleContextMenu(event, item)}
                            style={{
                                padding: '8px',
                                cursor: 'pointer',
                                userSelect: 'none',
                            }}
                        >
                            <a href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Context Menu */}
            {contextMenu && (
                <div
                    style={{
                        position: 'absolute',
                        top: contextMenu.y,
                        left: contextMenu.x,
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        zIndex: 1000,
                    }}
                >
                    <button
                        onClick={() => handleMenuOptionClick('clone')}
                        style={{
                            display: 'block',
                            padding: '8px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                        }}
                    >
                        Clone
                    </button>
                </div>
            )}
        </div>
    );
};

SideNav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ),
};

export default SideNav;
