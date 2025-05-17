import { Button } from "@/components/ui/button";
import { NeoPluginProps, Option } from "@/typings/pluginPorps";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TextUnderlineIcon } from "@phosphor-icons/react";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";

export const UnderLinePlugin = ({ selectedBoolean, setSelectedOption }: NeoPluginProps): JSX.Element => {

    const [editor] = useLexicalComposerContext();

    const onClick = (e: React.MouseEvent) => {
        setSelectedOption(!selectedBoolean)
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
    }

    return (
        <Button color="secondary" className={`${selectedBoolean ? "neo__button__selected neo__button" : "neo__button"} `} onClick={onClick}>
            <TextUnderlineIcon size={16}/>
        </Button>
    );
}