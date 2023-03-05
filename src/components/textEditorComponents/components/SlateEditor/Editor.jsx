import React, { useCallback, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withHistory } from "slate-history";
import {Slate, Editable, withReact } from 'slate-react';
import Toolbar from './Toolbar/Toolbar'
import { sizeMap, fontFamilyMap } from './utils/SlateUtilityFunctions.js'
import withLinks from './plugins/withLinks.js'
import withTables from './plugins/withTable.js'
import withEmbeds from './plugins/withEmbeds.js'
import withEquation from './plugins/withEquation.js'
import './Editor.css'
import Link from'./Elements/Link/Link'
import Image from './Elements/Image/Image'
import Video from './Elements/Video/Video'
import Equation from './Elements/Equation/Equation'
import { InlineMath, BlockMath } from 'react-katex';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Textarea from '@mui/joy/Textarea';

const Element = (props) =>{

    const {attributes, children, element} = props;
    
    switch(element.type){
        case 'headingOne':
            return <h1 {...attributes} {...element.attr}>{children}</h1>
        case 'headingTwo':
            return <h2 {...attributes} {...element.attr}>{children}</h2>
        case 'headingThree':
            return <h3 {...attributes} {...element.attr}>{children}</h3>
        case 'blockquote':
            return <blockquote {...attributes} {...element.attr}>{children}</blockquote>
        case 'alignLeft':
            return <div style={{listStylePosition:'inside'}} {...attributes} {...element.attr}>{children}</div>
        case 'alignCenter':
            return <div style={{display:'flex',justifyContent:'center',listStylePosition:'inside'}} {...attributes} {...element.attr}>{children}</div>
        case 'alignRight':
            return <div style={{display:'flex',justifyContent:'flex-end',listStylePosition:'inside'}} {...attributes} {...element.attr}>{children}</div>
        case 'list-item':
            return  <li {...attributes} {...element.attr}>{children}</li>
        case 'orderedList':
            return <ol type='1' {...attributes}>{children}</ol>
        case 'unorderedList':
            return <ul {...attributes}>{children}</ul>
        case 'link':
            return <Link {...props}/>
       
        case 'table':
            return <table>
                <tbody {...attributes}>{children}</tbody>
            </table>
        case 'table-row':
            return <tr {...attributes}>{children}</tr>
        case 'table-cell':
            return <td {...element.attr} {...attributes}>{children}</td>
        case 'image':
            return <Image {...props}/>
        case 'video':
            return <Video {...props}/>
        case 'equation':
            return <Equation {...props}/>
        default :
            return <div {...element.attr} {...attributes}>{children}</div>
    }
}

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>
    }
  
    if (leaf.code) {
      children = <code>{children}</code>
    }
  
    if (leaf.italic) {
      children = <em>{children}</em>
    }
    if(leaf.strikethrough){
        children = <span style={{textDecoration:'line-through'}}>{children}</span>
    }
    if (leaf.underline) {
      children = <u>{children}</u>
    }
    if(leaf.superscript){
        children = <sup>{children}</sup>
    }
    if(leaf.subscript){
        children = <sub>{children}</sub>
    }
    if(leaf.color){
        children = <span style={{color:leaf.color}}>{children}</span>
    }
    if(leaf.bgColor){
        children = <span style={{backgroundColor:leaf.bgColor}}>{children}</span>
    }
    if(leaf.fontSize){
        const size = sizeMap[leaf.fontSize]
        children = <span style={{fontSize:size}}>{children}</span>
    }
    if(leaf.fontFamily){
        const family = fontFamilyMap[leaf.fontFamily]
        children = <span style={{fontFamily:family}}>{children}</span>
    }
    
    //console.log("children",children);

    return <span {...attributes}>{children}</span>
}
const SlateEditor = ()=>{
    const editor = useMemo(() => withEquation(withHistory(withEmbeds(withTables(withLinks(withReact(createEditor())))))), []);
    const [value,setValue] = useState([
        {
            type:'paragaph',
            children:[{text:'Write Something Down'}],
        },
    ]);

    const [text, setText] = useState("");


    const renderElement = useCallback(props => <Element {...props}/>,[])

    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])

    
    
    return (
            <Slate editor={editor} value={value} onChange={newValue => {
                setValue(newValue);
                console.log(newValue);
                var res = "";
                for (let i = 0; i < newValue.length; i++) {
                    console.log(newValue[i].children[0].text)
                    res = res + newValue[i].children[0].text + "\n"
                    // console.log(newValue[i].children[0]);
                }
                setText(res);
            }}>
                <Toolbar />
                <div className="editor-wrapper" style={{border:'1px solid #f3f3f3',padding:'0 10px'}}>
                    <Editable
                        placeholder='Write something'
                        renderElement={renderElement} 
                        renderLeaf={renderLeaf}
                    />
                </div>
                <Box sx={{ mx: 'auto', width: 200, paddingTop: 5}}>
                    <Button variant="contained" size="large"  onClick={() => {
                    console.log(text)
                }}>
                    Generate
                    </Button>
                </Box>
                
                <Box sx={{ p: 2 }}>
                    <Textarea
                        placeholder="Type in here…"
                        defaultValue="Feedback output."
                        minRows={2}
                        maxRows={8}
                    />
                </Box>
            </Slate>
        
    )
}

export default SlateEditor;