import { useEffect } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { OnChangePluginProps } from '@/typings/pluginPorps';


export const OnChangePlugin = ( { onChange } : OnChangePluginProps) : JSX.Element => {
    
    const [ editor ] = useLexicalComposerContext();

    useEffect(() => {
      return editor.registerUpdateListener(({editorState }) => {
        onChange(editorState)

      })
    
      
    }, [editor,onChange])
    return (<></>);
    
} 


export function OnChangePlugin2({ onChange } : any) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
      return editor.registerUpdateListener(({editorState}) => {
        onChange(editorState);
      });
    }, [editor, onChange]);
  }
