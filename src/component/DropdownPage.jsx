'use client'
import { Button, Dropdown, Label } from '@heroui/react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

const DropdownPage = () => {
    return (
        <Dropdown>
            <Button aria-label="Menu" variant="secondary">
                <RxHamburgerMenu />
            </Button>
            <Dropdown.Popover>
                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                    <Dropdown.Item id="new-file" textValue="New file">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                    </Dropdown.Item>
                    <Dropdown.Item id="copy-link" textValue="Copy link">
                        <li>
                            <Link href={"/Products"}>Products</Link>
                        </li>
                    </Dropdown.Item>
                    <Dropdown.Item id="edit-file" textValue="Edit file">
                         <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
};

export default DropdownPage;