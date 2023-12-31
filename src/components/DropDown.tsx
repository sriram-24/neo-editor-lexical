import React, { useState } from 'react'
import { List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material'
import { DropdownProps, Option } from '@/typings/pluginPorps';

function DropDown({ options, executeAction, selectedOption, setSelectedOption, title, ariaLabel }: DropdownProps): JSX.Element {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setSelectedOption(options[index]);
        setAnchorEl(null);
        executeAction(event, options[index])
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="neo__dropdown">
            <List
                component="nav"
                aria-label={title.toString()}
                sx={{ bgcolor: 'background.paper' }}
                className='neo__dropdown__wrapper'
            >
                <ListItem
                    button
                    id="toolbar-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label={selectedOption instanceof Object ? selectedOption.value.toString() : ""}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                    className='neo__dropdown__item'
                >
                    <ListItemText
                        primary={selectedOption instanceof Object ? selectedOption.value.toString() : null}
                    />
                </ListItem>
            </List>
            <Menu
                className='neo__dropdown__menu'
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'toolbar-button',
                    role: 'listbox',
                }}
            >
                {options.map((option: Option, index) => (
                    <MenuItem
                        className='neo__dropdown__menuitem'
                        key={option + index.toString()}
                        selected={index === options.indexOf(selectedOption instanceof Object ? selectedOption : options[0])}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option.value}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default DropDown