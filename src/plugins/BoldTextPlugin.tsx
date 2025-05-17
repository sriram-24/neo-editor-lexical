import { Button } from "@/components/ui/button";
import { NeoPluginProps, Option } from "@/typings/pluginPorps";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import {TextBIcon} from '@phosphor-icons/react'

export const BoldTextPlugin = ({ selectedBoolean, setSelectedOption }: NeoPluginProps): JSX.Element => {

    const [editor] = useLexicalComposerContext();

    const onClick = (e: React.MouseEvent) => {
        setSelectedOption(!selectedBoolean)


        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
    }

    return (
        <Button className={`${selectedBoolean ? "neo__button__selected neo__button" : "neo__button"} `} onClick={onClick}>
            <TextBIcon size={16} />
        </Button>
    );
}