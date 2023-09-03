
import { EditorState } from 'lexical'
import { HeadingTagType } from '@lexical/rich-text'

export interface OnChangePluginProps {
    onChange : Function
}

export interface DropdownProps {
    title: String,
    ariaLabel : String,
    selectedOption : Option,
    setSelectedOption : Function,
    options : Array<Option>,
    executeAction : Function,
    
}

export interface Option{
    key : String | HeadingTagType,
    value : String
}

export interface HeadingPluginProps { 
    selectedOption : Option,
    setSelectedOption : Function
 }