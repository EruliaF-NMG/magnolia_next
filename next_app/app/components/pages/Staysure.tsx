import React from 'react';
import { EditableArea } from '@magnolia/react-editor';


interface Props{
  header?: object|null,
  body?: object|null,
  footer?: object|null,
}

const Staysure = ({
  header=null,
  body=null,
  footer=null
}:Props): JSX.Element => {
  return (
    <div className="homepage">
      { header && <EditableArea content={header} className="header" elementType={"header"} /> }  
      { body && <EditableArea content={body} className="fullWidth" /> }  
      { footer && <EditableArea content={footer} className="footer" elementType={"footer"} /> } 
    </div>
  ) 
};

export {
  Staysure
};