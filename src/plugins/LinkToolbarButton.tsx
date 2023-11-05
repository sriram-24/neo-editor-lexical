import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import React, {useEffect, useCallback, MouseEventHandler, PropsWithChildren} from 'react'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import { Button } from "@mui/material";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { NeoAction } from '@/typings/pluginPorps';

function LinkToolbarButton({ executeAcion } : NeoAction) : JSX.Element {

  return (
    <Button color="secondary" className={"neo__button"} onClick={executeAcion}>
            <InsertLinkOutlinedIcon />
        </Button>
  )
}

export default LinkToolbarButton