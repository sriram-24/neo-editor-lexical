import { NeoPluginProps, Option } from "@/typings/pluginPorps";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Button } from "@mui/material";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';

export const ItalicsPlugin = ({ selectedBoolean, setSelectedOption }: NeoPluginProps): JSX.Element => {

    const [editor] = useLexicalComposerContext();

    const onClick = (e: React.MouseEvent) => {
        setSelectedOption(!selectedBoolean)
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
    }

    return (
        <Button color="secondary" className={selectedBoolean ? "neo__button__selected neo__button" : "neo__button"} onClick={onClick}>
            <FormatItalicOutlinedIcon />
        </Button>
    );
}