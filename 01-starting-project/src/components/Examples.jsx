import TabButton from './TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from '../data-with-examples.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();
  
    // This function will be called when a TabButton is clicked
    function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
      console.log(`You selected the ${selectedButton} tab!`);
  
    }

    //
    let TabContent =  <p>Please select a topic.</p>
    if(selectedTopic) 
    {
      TabContent = 
      (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic]?.title}</h3>
          <p>{EXAMPLES[selectedTopic]?.description}</p>
          <pre><code>{EXAMPLES[selectedTopic]?.code}</code></pre>
        </div>
      )
    }



  return (
  <Section title="Examples" id="examples">

    <Tabs buttons =
    {
      <>
        <TabButton isSelected={selectedTopic=== 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic=== 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic=== 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic=== 'state'} onClick={() => handleSelect('state')}>State</TabButton>
      </>
    }
    >
      {TabContent}
    </Tabs>
  </Section>
  );
}