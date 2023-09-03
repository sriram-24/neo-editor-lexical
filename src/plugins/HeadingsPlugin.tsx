import DropDown from "@/components/DropDown";
import { NeoPluginProps, Option } from "@/typings/pluginPorps";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, $createParagraphNode } from 'lexical'
import { $setBlocksType } from '@lexical/selection'
import { $createHeadingNode, HeadingTagType } from '@lexical/rich-text'
import { useEffect, useState } from "react";

export const Headings : Array<Option>  = [
    {
        key : 'paragraph',
        value : 'Normal text' 
    },
    {
        key : 'h1',
        value : 'Heading 1' 
    },
    {
        key : 'h2',
        value : 'Heading 2' 
    },
    {
        key : 'h3',
        value : 'Heading 3' 
    },
    {
        key : 'h4',
        value : 'Heading 4' 
    },
    {
        key : 'h5',
        value : 'Heading 5' 
    },
    {
        key : 'h6',
        value : 'Heading 6' 
    },
    
]
    


export const HeadingsPlugin = ({selectedOption, setSelectedOption} : NeoPluginProps) : JSX.Element => { 
   
    const [ editor ] = useLexicalComposerContext();
    const onClick = (e : React.MouseEvent, selectedOption : Option) : void =>{
        editor.update(() => {
            const selection = $getSelection()

            if($isRangeSelection(selection)) {
                $setBlocksType(selection, () => {
                    if(selectedOption.key === 'paragraph'){
                        return $createParagraphNode()
                    }
                    else{
                        return $createHeadingNode(selectedOption.key as HeadingTagType)
                    }
                })
            }
        })
        
    } 

    return(

        <DropDown 
            options={Headings}
            executeAction={onClick}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption} 
            title={'Heading'} 
            ariaLabel={'Text format'}        />
    );
}