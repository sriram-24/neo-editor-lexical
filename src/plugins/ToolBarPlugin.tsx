import DropDown from "@/components/DropDown";
import { Button } from "@mui/material";
import { Headings, HeadingsPlugin } from "./HeadingsPlugin";
import { useCallback, useEffect, useState } from "react";
import { $getSelection, $isRangeSelection, COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND, LexicalEditor, TextNode, LexicalNode, ParagraphNode } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { HeadingNode } from '@lexical/rich-text'
import { Option } from "@/typings/pluginPorps";
import Divider from "@/components/Divider";

export const ToolBarPlugin = () : JSX.Element => {
    const [headingOption,setHeadingOption] = useState<Option>(Headings[0]);
    const [editor] = useLexicalComposerContext();
    const [activeEditor, setActiveEditor] = useState<LexicalEditor>() 

    const updateToolbar = useCallback(()=>{
        const selection = $getSelection()
        if($isRangeSelection(selection)){
            const anchorNode : TextNode = selection.anchor.getNode()
            const parentNode  = anchorNode.getParent();
            if (parentNode instanceof HeadingNode){
                
                const Heading = Headings.find(value => value.key ==parentNode.getTag())
                if(Heading){
                    setHeadingOption(Heading)
                }
            }
            if(anchorNode instanceof ParagraphNode){
                setHeadingOption(Headings[0])
            }
            
        }
    },[]);
    useEffect(() => {
        return editor.registerCommand(
          SELECTION_CHANGE_COMMAND,
          (_payload, newEditor) => {
            updateToolbar();
            setActiveEditor(newEditor);
            return false;
          },
          COMMAND_PRIORITY_CRITICAL,
        );
      }, [editor, updateToolbar]);

    return(
        
        <div 
            className="neo__toolbar"
        >
            <HeadingsPlugin 
                selectedOption={headingOption} 
                setSelectedOption={setHeadingOption}                
            />
            <Divider  />  
        </div>
    );
}
