import { NeoPluginProps, Option } from "@/typings/pluginPorps";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Button } from "@mui/material";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

export const CodeBlockPlugin = ({ selectedBoolean, setSelectedOption }: NeoPluginProps): JSX.Element => {

    const [editor] = useLexicalComposerContext();

    const onClick = (e: React.MouseEvent) => {
        setSelectedOption(!selectedBoolean)
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')
    }

    return (
        <Button color="secondary" className={selectedBoolean ? "neo__button__selected neo__button" : "neo__button"} onClick={onClick}>
            <CodeOutlinedIcon />
        </Button>
    );
}