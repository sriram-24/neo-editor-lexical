import LinkPlugin from '@/plugins/LinkPlugin'
import { OnChangePlugin } from '@/plugins/OnChangePlugin'
import { ToolBarPlugin } from '@/plugins/ToolBarPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { TreeView } from '@lexical/react/LexicalTreeView'
import { EditorState } from 'lexical'
import { LinkNode } from '@lexical/link'
import { HeadingNode } from '@lexical/rich-text'
import React, { useState } from 'react'

function NeoEditor() {
	const [editorState, setEditorState] = useState<EditorState>()

	const onChange = (editorState: EditorState) => {
		setEditorState(editorState)
	}
	const onError = (error: any) => {
		console.error('An error occured : ' + error)
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

	const theme = {
		text: {
			underline: 'neo__textunderline',
			code: 'neo__textcodeblock'
		}
	}

	const initalConfig = {
		namespace: 'neo-editor',
		theme,
		onError,
		nodes: [HeadingNode, LinkNode]
	}
	return (
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
				<LinkPlugin />
				<HistoryPlugin />
				{process.env.NEXT_PUBLIC_DEBUGMODE == "1" ? <TreeViewPlugin /> : <></>}
			</LexicalComposer>
		</div>
	)
}

export default NeoEditor