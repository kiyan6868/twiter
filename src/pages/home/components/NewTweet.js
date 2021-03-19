import { Button, colors, Divider, Grid, Typography } from '@material-ui/core';
import useStyle from '../../../components/layout/styles'
import classnames from 'classnames'
import { useEffect, useRef, useState } from 'react';

const NewTweet= ()=>{

   const classes = useStyle() ;
   const input = useRef();
   const [tweet,setTweet] = useState();
   (function( cursorManager ) {

    //From: http://www.w3.org/TR/html-markup/syntax.html#syntax-elements
    var voidNodeTags = ['AREA', 'BASE', 'BR', 'COL', 'EMBED', 'HR', 'IMG', 'INPUT', 'KEYGEN', 'LINK', 'MENUITEM', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR', 'BASEFONT', 'BGSOUND', 'FRAME', 'ISINDEX'];

    //From: https://stackoverflow.com/questions/237104/array-containsobj-in-javascript
    Array.prototype.contains = function(obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    }

    //Basic idea from: https://stackoverflow.com/questions/19790442/test-if-an-element-can-contain-text
    function canContainText(node) {
        if(node.nodeType == 1) { //is an element node
            return !voidNodeTags.contains(node.nodeName);
        } else { //is not an element node
            return false;
        }
    };

    function getLastChildElement(el){
        var lc = el.lastChild;
        while(lc && lc.nodeType != 1) {
            if(lc.previousSibling)
                lc = lc.previousSibling;
            else
                break;
        }
        return lc;
    }

    //Based on Nico Burns's answer
    cursorManager.setEndOfContenteditable = function(contentEditableElement)
    {

        while(getLastChildElement(contentEditableElement) &&
              canContainText(getLastChildElement(contentEditableElement))) {
            contentEditableElement = getLastChildElement(contentEditableElement);
        }

        var range,selection;
        if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
        {    
            range = document.createRange();//Create a range (a range is a like the selection but invisible)
            range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            selection = window.getSelection();//get the selection object (allows you to change selection)
            selection.removeAllRanges();//remove any selections already made
            selection.addRange(range);//make the range you have just created the visible selection
        }
        else if(document.selection)//IE 8 and lower
        { 
            range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
            range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            range.select();//Select the range (make it the visible selection
        }
    }

}( window.cursorManager = window.cursorManager || {}));
const renderTweetText = (text)=>{
  return {'__html' : text.replace(/#\S+/g,'<span style="color:blue">$&</span>')}
}
   useEffect(()=>{
      input.current.addEventListener('input',function(e){
        setTweet(renderTweetText(e.target.innerText))
        window.cursorManager.setEndOfContenteditable(e.target)
      },false)
   },[])
   
  return (
    <div>
        <Grid container direction={'row'} alignItems={'center'}>
            <img className={classes.profileImageBox}/>
            <div contentEditable={true} ref={input} dangerouslySetInnerHTML={tweet} data-placeholder={'توییت کن...'} className={classnames(classes.texBoxOfTwit,'editable')}/>
        </Grid>
        <Grid container direction={'row-reverse'} alignItems={'center'}>
            <Button variant={'contained'} color={'primary'} className={classes.twitBotton}>توییت</Button>
            <img src={'images/picture svg icon.svg'} className={classes.pictureIcon}></img>
        </Grid>
    </div>
  );
}

export default NewTweet;
