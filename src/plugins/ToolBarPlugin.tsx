import { Headings, HeadingsPlugin } from "./HeadingsPlugin";
import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { $getSelection, $isRangeSelection, COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND, LexicalEditor, TextNode, LexicalNode, ParagraphNode } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { HeadingNode } from '@lexical/rich-text'
import { Option } from "@/typings/pluginPorps";
import Divider from "@/components/Divider";
import { FontSizePlugin, FontSizes } from "./FontSizePlugin";
import { $getSelectionStyleValueForProperty } from '@lexical/selection'
import { BoldTextPlugin } from "./BoldTextPlugin";
import { mergeRegister } from '@lexical/utils'
import { ItalicsPlugin } from "./ItalicsPlugin";
import { UnderLinePlugin } from "./UnderlinePlugin";
import { CodeBlockPlugin } from "./CodeBlockPlugin";
import LinkToolbarButton from "./LinkToolbarButton";
import { TOGGLE_LINK_COMMAND } from '@lexical/link'
import { sanitizeUrl } from "@/utils/url";


export const ToolBarPlugin = (): JSX.Element => {
    const [lexEditor] = useLexicalComposerContext();
    const [headingOption, setHeadingOption] = useState<Option>(Headings[0]);
    const [selectedFontSize, setFontsize] = useState<Option>(FontSizes[3]);
    const [editor] = useLexicalComposerContext();
    const [activeEditor, setActiveEditor] = useState<LexicalEditor>(lexEditor)
    const [isBold, setIsBold] = useState<Boolean>(false);
    const [isItalics, setIsItalics] = useState<Boolean>(false);
    const [isUnderline, setIsUnderline] = useState<Boolean>(false);
    const [isCodeBlock, setIsCodeBlock] = useState<Boolean>(false);
    const [isLink, setIsLink] = useState<Boolean>(false);
    const updateToolbar = useCallback(() => {
        const selection = $getSelection()
        if ($isRangeSelection(selection)) {

            // update bold selection 
            setIsBold(selection.hasFormat('bold'));
            setIsItalics(selection.hasFormat('italic'));
            const anchorNode: TextNode = selection.anchor.getNode()
            const parentNode = anchorNode.getParent();
            console.log(anchorNode, parentNode);
			if(isLink){
				console.log("linked");
				
				editor.dispatchCommand(TOGGLE_LINK_COMMAND, anchorNode.__text);
			}

            // Update toolbar if selection is heading node.

            if (parentNode instanceof HeadingNode) {

                const Heading = Headings.find(value => value.key == parentNode.getTag())
                if (Heading) {
                    setHeadingOption(Heading)
                }
            }
            if (anchorNode instanceof ParagraphNode) {
                setHeadingOption(Headings[0])
            }

            // Update toolbar if selection has font size.
            if ($getSelectionStyleValueForProperty(selection, 'font-size', '15px') !== '15px') {
                const fontSize = FontSizes.find(fontSize => $getSelectionStyleValueForProperty(selection, 'font-size', '15px') === fontSize.key.toString())
                if (fontSize) {
                    setFontsize(fontSize)
                }
            } else {
                setFontsize(FontSizes[3])
            }

        }
    }, [isLink]);
    useEffect(() => {

        return mergeRegister(
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                (_payload, newEditor) => {
                    updateToolbar();
                    setActiveEditor(newEditor);
                    return false;
                },
                COMMAND_PRIORITY_CRITICAL,
            ),
            activeEditor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateToolbar();
                })
            }
            ))
    }, [editor, updateToolbar]);

    const insertLink : MouseEventHandler = useCallback(() => {
		// const selection = $getSelection()
		// console.log("selection",selection);
		setIsLink(!isLink)
		// console.log("isLink:"+isLink);
		
        // if (!isLink) {
        //   editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://www.google.com");
        // } else {
		// 	console.log("elseadd");
			
        //   editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://www.google.com");
        // }
      }, [editor, isLink]);
    

    return (

        <div
            className="neo__toolbar"
        >
            <HeadingsPlugin
                selectedOption={headingOption}
                setSelectedOption={setHeadingOption}
            />
            <Divider />
            <FontSizePlugin
                selectedOption={selectedFontSize}
                setSelectedOption={setFontsize}
            />
            <BoldTextPlugin selectedBoolean={isBold} setSelectedOption={setIsBold} />
            <ItalicsPlugin selectedBoolean={isItalics} setSelectedOption={setIsItalics} />
            <UnderLinePlugin selectedBoolean={isUnderline} setSelectedOption={setIsUnderline} />
            <CodeBlockPlugin selectedBoolean={isCodeBlock} setSelectedOption={setIsCodeBlock} />
            <LinkToolbarButton executeAcion={insertLink} /> 
        </div>
    );
}
