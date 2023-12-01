"use client"
import { EditablePage } from '@magnolia/react-editor';

// pages
import { Staysure } from '../../pages/Staysure';
// templates
import { Home } from '../../templates/home/Home';
import { Quotation } from '../../templates/quotation/Quotation';
// //molecules
import { Button, ButtonWithState  } from '../../form/button/ButtonWithState';
import { InputBox, InputBoxWithState  } from '../../form/input-box/InputBox';
import { SelectBoxWithFetch, SelectBoxWithState } from '../../form/select-box/SelectBoxWithFetch';
import { InfoArticles } from '../../templates/home/InfoArticles';
import { InfoTopContent } from '../../templates/home/InfoTopContent';
import { IntroSlider } from '../../templates/home/IntroSlider';
//organisms
import { Footer } from '../../common/Footer';
import { Header,TopBar,HeaderInfoBar,HeaderInfoTile } from '../../common/Header';
//atoms
import { Headline } from '../../common/Headline';
import { Card,EditableCard } from '../../common/Card';
import { Image,BackgroundImage  } from '../../common/Image';
import { Paragraph  } from '../../common/Paragraph';
import { SelectBox } from '../../form/select-box/SelectBox';
import { InputElemnetWrapper } from '../../form/wrappers/InputElemnetWrapper';
import { FormElement, EditableFormElement } from '../../form/form/FormElement';


// export interface MagnoliaPageWrapperProps{
//   templateAnnotations?:object|null,
//   page?:object|null,
// }

const MagnoliaPageWrapper = ({props}:any): JSX.Element => {

  const config = {
    componentMappings: {
      // pages
      'next-pages:pages/Staysure': Staysure,
      // templates
      'next-templates:components/Home': Home,
      'next-templates:components/Quotation': Quotation,
      // organisms
      'next-organisms:components/Footer':Footer,
      'next-organisms:components/Header':Header,
      'next-organisms:components/TopBar':TopBar,
      'next-organisms:components/HeaderInfoBar':HeaderInfoBar,
      'next-organisms:components/HeaderInfoTile':HeaderInfoTile,
      // molecules
      'next-molecules:components/ButtonWithState':ButtonWithState,
      'next-molecules:components/InputBoxWithState':InputBoxWithState,
      'next-molecules:components/SelectBoxWithFetch':SelectBoxWithFetch,
      'next-molecules:components/SelectBoxWithState':SelectBoxWithState,
      'next-molecules:components/InfoArticles':InfoArticles,
      'next-molecules:components/InfoTopContent':InfoTopContent,
      'next-molecules:components/IntroSlider':IntroSlider,
      // atoms
      'next-atoms:components/Headline':Headline,
      'next-atoms:components/Card':Card,
      'next-atoms:components/EditableCard':EditableCard,
      'next-atoms:components/Image':Image,
      'next-atoms:components/BackgroundImage':BackgroundImage,
      'next-atoms:components/Paragraph':Paragraph,
      'next-atoms:components/Button':Button,
      'next-atoms:components/InputBox':InputBox,
      'next-atoms:components/SelectBox':SelectBox,
      'next-atoms:components/InputElemnetWrapper':InputElemnetWrapper,
      'next-atoms:components/FormElement':FormElement,
      'next-atoms:components/EditableFormElement':EditableFormElement,
    },
  };
console.log("props.page=", props.page,props.templateAnnotations);
  return (
      <div>
       {props.page && <EditablePage content={props.page} config={config} templateAnnotations={props.templateAnnotations} />}
     </div>
  );
}

export default MagnoliaPageWrapper