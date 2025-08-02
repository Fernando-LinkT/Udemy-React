import {CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import {EXAMPLES} from './data-with-examples.js';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  // This function will be called when a TabButton is clicked
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(`You selected the ${selectedButton} tab!`);

  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            
            <CoreConcept {...CORE_CONCEPTS[1]}
            />

            <CoreConcept {...CORE_CONCEPTS[2]}
            />
            
            <CoreConcept {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu> {/*html element to create a list of buttons*/}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            {selectedTopic === undefined ? <p>Please select a topic.</p> : null }
            {selectedTopic ? (
              <div id="tab-content" >
                <h3>{EXAMPLES[selectedTopic]?.title}</h3>
                <p>{EXAMPLES[selectedTopic]?.description}</p>
                <pre><code>{EXAMPLES[selectedTopic]?.code}</code></pre>
              </div>
              ) : null
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;