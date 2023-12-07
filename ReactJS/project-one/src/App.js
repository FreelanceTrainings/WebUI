import logo from './logo.svg';
import './App.css';
import Hello from './Components/FunctionalComponents/Hello';
import Message from './Components/FunctionalComponents/Message';
import Sample from './Components/FunctionalComponents/Sample';
import Greet from './Components/ClassComponents/Greet';
import PropsDemo1 from './Components/Props/PropsDemo1';
import PropsDemo2 from './Components/Props/PropsDemo2';
import ChildPropsDemo from './Components/Props/ChildPropsDemo';
import StateDemo1 from './Components/State/StateDemo1';
import StateDemo2 from './Components/State/StateDemo2';
import DestructDemo1 from './Components/DestructuringPropsAndState/DestructDemo1';
import DestructDemo2 from './Components/DestructuringPropsAndState/DestructDemo2';
import EB01 from './Components/EventBindings/EB01';
import EB02 from './Components/EventBindings/EB02';
import EB03 from './Components/EventBindings/EB03';
import EB04 from './Components/EventBindings/EB04';
import CR01 from './Components/ConditionalRendering/CR01';
import CR02 from './Components/ConditionalRendering/CR02';
import CR03 from './Components/ConditionalRendering/CR03';
import CR04 from './Components/ConditionalRendering/CR04';
import PChild from './Components/PassingMethodsAsProps/PChild';
import PParent from './Components/PassingMethodsAsProps/PParent';
import ArrayDemo1 from './Components/WorkingWithArrays/ArrayDemo1';
import ArrayDemo2 from './Components/WorkingWithArrays/ArrayDemo2';
import CSSDemo1 from './Components/WorkingWithCSS/CSSDemo1';
import CSSDemo2 from './Components/WorkingWithCSS/CSSDemo2';
import CSSDemo3 from './Components/WorkingWithCSS/CSSDemo3';
import BasicForm from './Components/Forms/BasicForm';
import Table from './Components/Fragments/Table';
import ComponentA from './Components/LifeCycleHooks/ComponentA';
import RegularComponent from './Components/PureComponents/RegularComponent';
import PureComponentDemo from './Components/PureComponents/PureComponentDemo';
import ParentComponentDemo from './Components/MemoComponents/ParentComponentDemo';
import RefDemo from './Components/Refs/RefDemo';
import FRParent from './Components/ForwardRefs/FRParent';
import ProductComponent from './Components/ErrorHandling/ProductComponent';
import ErrorHandler from './Components/ErrorHandling/ErrorHandler';
import UseStateDemo from './Components/UseState/UseStateDemo';
import UseStateDemo1 from './Components/UseState/UseStateDemo1';
import UseEffectDemo from './Components/UseEffect/UseEffectDemo';
import ImagesDemo from './Components/DisplayingImages/ImagesDemo';
import BootstrapSampleDemo from './Components/BootstrapDemo/BootstrapSampleDemo';
import ComponentA1 from './Components/ContextAPI/ComponentA';
import { UserProvider } from './Components/ContextAPI/UserContext';

function App() {
  return (
    <div>
      {/* <Hello/>
      <hr/>
      <Message/>
      <hr/>
      <Sample/>
      <hr/>
      <Greet/> */}

      {/* <PropsDemo1 msg="Good Morning" userid="admin"/>
      <PropsDemo1 msg="Good Afternoon" userid="harry"/>
      <PropsDemo1 msg="Good Evening" userid="john"/>

      <br/>

      <PropsDemo2 msg="Good Morning" userid="admin"/>
      <PropsDemo2 msg="Good Afternoon" userid="harry"/>
      <PropsDemo2 msg="Good Evening" userid="john"/>

      <br/>

      <ChildPropsDemo id="1" name="John">
          Department: Computers
      </ChildPropsDemo>

      <ChildPropsDemo id="2" name="Divya">
          Department: Electronics
      </ChildPropsDemo> */}

     {/* <StateDemo1/> */}
    {/* <StateDemo2/> */}

    {/* <DestructDemo1 id="1" name="John" city="Hyderabad"/>

    <DestructDemo2 id="1" name="John" city="Hyderabad"/> */}
{/* 
    <EB01/>
    <EB02/> */}
    {/* <EB03/> */}
    {/* <EB04/> */}
    {/* <CR01/> */}
    {/* <CR02/> */}
    {/* <CR03/> */}
    {/* <CR04/> */}
    {/* <PParent/> */}
    {/* <ArrayDemo1/> */}
    {/* <ArrayDemo2/> */}

    {/* <CSSDemo1 status={false}/> */}
    {/* <CSSDemo2/> */}
    {/* <CSSDemo3/> */}

    {/* <BasicForm/> */}

    {/* <Table/> */}
    {/* <ComponentA/> */}

    {/* <RegularComponent/>
    <PureComponentDemo/> */}

    {/* <ParentComponentDemo/> */}
    {/* <RefDemo/> */}
    {/* <FRParent/> */}

    {/* <ErrorHandler>
      <ProductComponent id="1" name="coke" price={50} category="Beverages"/>
    </ErrorHandler>

    <ErrorHandler>
      <ProductComponent id="2" name="pepsi" price={50} category="Beverages"/>
    </ErrorHandler>

    <ErrorHandler>
      <ProductComponent id="3" name="kinley soda" price={50} category="Beverages"/>
    </ErrorHandler>

    <ErrorHandler>
      <ProductComponent id="4" name="burger" price={50} category="Food"/>
    </ErrorHandler> */}

    {/* <UseStateDemo/> */}
    {/* <UseStateDemo1/> */}
    {/* <UseEffectDemo/> */}
    {/* <ImagesDemo/> */}
    {/* <BootstrapSampleDemo/> */}

<UserProvider value="admin1258">
    <ComponentA1/>
</UserProvider>
    
    
    </div>
     
  );
}

export default App;
