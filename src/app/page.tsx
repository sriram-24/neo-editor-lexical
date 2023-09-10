"use client";
import Image from 'next/image'
import { useState } from 'react'
import { EditorState } from 'lexical'
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { OnChangePlugin } from '@/plugins/OnChangePlugin'
import { HeadingNode } from '@lexical/rich-text'
import { ToolBarPlugin } from '@/plugins/ToolBarPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { TreeView } from '@lexical/react/LexicalTreeView'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

/* 
* Editor component
*/

export default function Home() {

    const [editorState, setEditorState] = useState<EditorState>()

    const onChange = (editorState: EditorState) => {
        setEditorState(editorState)
    }

    const theme = {
        text: {
            underline: 'neo__textunderline',
            code : 'neo__textcodeblock'
        }
    }

    const onError = (error: any) => {
        console.error('An error occured : ' + error)
    }

    const initalConfig = {
        namespace: 'neo-editor',
        theme,
        onError,
        nodes: [HeadingNode]
    }

    const TreeViewPlugin = (): JSX.Element => {
        const [editor] = useLexicalComposerContext();
        return (
            <TreeView
                editor={editor}
                treeTypeButtonClassName={'neo__debugtree__exportdom'}
                timeTravelButtonClassName={''}
                timeTravelPanelButtonClassName={''}
                timeTravelPanelClassName={''}
                timeTravelPanelSliderClassName={''}
                viewClassName={'neo__debugtree'} 
            />
        );
    }

    return (
        <>
            <div className="neo__editor">
                <LexicalComposer
                    initialConfig={initalConfig}
                >
                    <ToolBarPlugin />
                    <RichTextPlugin
                        contentEditable={<ContentEditable className='neo__editor__content' />}
                        placeholder={null}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <OnChangePlugin onChange={onChange} />
                    <AutoFocusPlugin />
                    <HistoryPlugin />
                    <TreeViewPlugin />
                </LexicalComposer>
            </div>
        </>
    )
}
