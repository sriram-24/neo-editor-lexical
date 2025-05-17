"use client";

import NeoEditor from '@/components/neo-editor';
import { ModeToggle } from '@/components/theme-toggle';

/* 
* Editor component
*/

export default function Home() {

    return (
        <>
			<ModeToggle />
            <NeoEditor />
        </>
    )
}
