import { Button } from "@/components/ui/button";
import { NeoPluginProps, Option } from "@/typings/pluginPorps";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { CodeIcon } from "@phosphor-icons/react";

import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";


export const CodeBlockPlugin = ({ selectedBoolean, setSelectedOption }: NeoPluginProps): JSX.Element => {

    const [editor] = useLexicalComposerContext();

    const onClick = (e: React.MouseEvent) => {
        setSelectedOption(!selectedBoolean)
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')
    }

    return (
        <Button  className={selectedBoolean ? "neo__button__selected neo__button" : "neo__button"} onClick={onClick}>
            <CodeIcon size={16} />
        </Button>
    );
}