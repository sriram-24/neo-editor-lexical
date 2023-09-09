import { useState } from 'react'
import DropDown from "@/components/DropDown";
import { DropdownProps, NeoPluginProps, Option } from '@/typings/pluginPorps';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createParagraphNode, $getSelection, $isRangeSelection } from 'lexical';
import { $patchStyleText } from '@lexical/selection'

export const FontSizes: Array<Option> = [
    {
        key: '10px',
        value: '10px'
    },
    {
        key: '12px',
        value: '12px'
    },
    {
        key: '14px',
        value: '14px'
    },
    {
        key: '15px',
        value: '15px'
    },
    {
        key: '16px',
        value: '16px'
    },
    {
        key: '18px',
        value: '18px'
    },
    {
        key: '20px',
        value: '20px'
    },
]

export const FontSizePlugin = ({ selectedOption, setSelectedOption }: NeoPluginProps): JSX.Element => {

    const [editor] = useLexicalComposerContext();
    const onclick = (e: React.MouseEvent, option: Option) => {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                if (option.key !== '15px') {
                    $patchStyleText(selection, { 'font-size': option.key.toString() })
                }
                else {
                    $patchStyleText(selection, { 'font-size': null })
                }
            }
        })
    }

    return (
        <DropDown
            title={''}
            ariaLabel={'Font Size'}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={FontSizes}
            executeAction={onclick}
        />
    );
}