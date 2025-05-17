import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import React, {useEffect, useCallback, MouseEventHandler, PropsWithChildren} from 'react'


import { NeoAction } from '@/typings/pluginPorps';
import { Button } from '@/components/ui/button';
import { LinkIcon } from '@phosphor-icons/react';

function LinkToolbarButton({ executeAcion } : NeoAction) : JSX.Element {

  return (
    <Button  className={"neo__button "} onClick={executeAcion}>
		<LinkIcon size={16} />
    </Button>
  )
}

export default LinkToolbarButton