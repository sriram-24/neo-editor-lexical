
import { EditorState } from 'lexical'
import { HeadingTagType } from '@lexical/rich-text'
import { MouseEventHandler} from 'react'

export interface OnChangePluginProps {
    onChange: Function
}

export interface DropdownProps {
    title: String,
    ariaLabel: String,
    selectedOption: Option | undefined,
    setSelectedOption: Function,
    options: Array<Option>,
    executeAction: Function,

}

export interface Option {
    key: String | HeadingTagType,
    value: String
}

export interface NeoPluginProps {
    selectedOption?: Option,
    selectedBoolean?: Boolean,
    setSelectedOption: Function
}

export interface NeoAction{
    executeAcion : MouseEventHandler
}