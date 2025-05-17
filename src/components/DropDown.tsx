import React, { useState } from 'react'
import { DropdownProps, Option } from '@/typings/pluginPorps';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

function DropDown({ options, executeAction, selectedOption, setSelectedOption, title, ariaLabel }: DropdownProps): JSX.Element {
    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setSelectedOption(options[index]);
        executeAction(event, options[index])
    };

    return (
        <div className="neo__dropdown">
            {/* <List
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
            </Menu> */}
			<DropdownMenu>
				<DropdownMenuTrigger className='px-4'>{selectedOption?.value}</DropdownMenuTrigger>
				<DropdownMenuContent>
					{options.map((option: Option, index) => (
                    <DropdownMenuItem
						 key={option + index.toString()}
						 aria-selected={index === options.indexOf(selectedOption instanceof Object ? selectedOption : options[0])}
						 onClick={(event) => handleMenuItemClick(event, index)}
					>
                        {option.value}
                    </DropdownMenuItem>
                ))}
				</DropdownMenuContent>
			</DropdownMenu>
        </div>
    )
}

export default DropDown