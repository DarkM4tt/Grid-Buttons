import { useState } from 'react';
import './App.css';

const App = () => {
  const [textStyles, setTextStyles] = useState([
    {
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      fontSize: '16px',
      color: '#000000'
    },
    {
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      fontSize: '16px',
      color: '#000000'
    },
    {
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      fontSize: '16px',
      color: '#000000'
    },
    {
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      fontSize: '16px',
      color: '#000000'
    }
  ]);

  const handleToggleStyle = (property, value, index) => {
    setTextStyles(prevStyles => {
      const newStyles = [...prevStyles];
      newStyles[index] = {
        ...prevStyles[index],
        [property]: prevStyles[index][property] === value ? 'normal' : value
      };
      return newStyles;
    });
  };

  const handleFontSizeChange = (event, index) => {
    setTextStyles(prevStyles => {
      const newStyles = [...prevStyles];
      newStyles[index] = {
        ...prevStyles[index],
        fontSize: event.target.value + 'px'
      };
      return newStyles;
    });
  };

  const handleColorChange = (event, index) => {
    setTextStyles(prevStyles => {
      const newStyles = [...prevStyles];
      newStyles[index] = {
        ...prevStyles[index],
        color: event.target.value
      };
      return newStyles;
    });
  };

  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-item left-column">
          <div className="button-group">
            <input type="button" value="Bold" onClick={() => handleToggleStyle('fontWeight', 'bold', 0)} />
            <input type="button" value="Italic" onClick={() => handleToggleStyle('fontStyle', 'italic', 0)} />
            <input type="button" value="Underline" onClick={() => handleToggleStyle('textDecoration', 'underline', 0)} />
          </div>
          <div className="input-group">
            <input type="number" min="10" max="50" defaultValue="16" onChange={e => handleFontSizeChange(e, 0)} />
            <input type="color" onChange={e => handleColorChange(e, 0)} />
          </div>
        </div>
        <div className="grid-item right-column">
          <p style={textStyles[0]}>My name is prabhat.</p>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item left-column">
          <div className="button-group">
            <input type="button" value="Bold" onClick={() => handleToggleStyle('fontWeight', 'bold', 1)} />
            <input type="button" value="Italic" onClick={() => handleToggleStyle('fontStyle', 'italic', 1)} />
            <input type="button" value="Underline" onClick={() => handleToggleStyle('textDecoration', 'underline', 1)} />
          </div>
          <div className="input-group">
            <input type="number" min="10" max="50" defaultValue="16" onChange={e => handleFontSizeChange(e, 1)} />
            <input type="color" onChange={e => handleColorChange(e, 1)} />
          </div>
        </div>
        <div className="grid-item right-column">
          <p style={textStyles[1]}>Your sentence here.</p>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item left-column">
          <div className="button-group">
            <input type="button" value="Bold" onClick={() => handleToggleStyle('fontWeight', 'bold', 2)} />
            <input type="button" value="Italic" onClick={() => handleToggleStyle('fontStyle', 'italic', 2)} />
            <input type="button" value="Underline" onClick={() => handleToggleStyle('textDecoration', 'underline', 2)} />
          </div>
          <div className="input-group">
            <input type="number" min="10" max="50" defaultValue="16" onChange={e => handleFontSizeChange(e, 2)} />
            <input type="color" onChange={e => handleColorChange(e, 2)} />
          </div>
        </div>
        <div className="grid-item right-column">
          <p style={textStyles[2]}>Your sentence here.</p>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item left-column">
          <div className="button-group">
            <input type="button" value="Bold" onClick={() => handleToggleStyle('fontWeight', 'bold', 3)} />
            <input type="button" value="Italic" onClick={() => handleToggleStyle('fontStyle', 'italic', 3)} />
            <input type="button" value="Underline" onClick={() => handleToggleStyle('textDecoration', 'underline', 3)} />
          </div>
          <div className="input-group">
            <input type="number" min="10" max="50" defaultValue="16" onChange={e => handleFontSizeChange(e, 3)} />
            <input type="color" onChange={e => handleColorChange(e, 3)} />
          </div>
        </div>
        <div className="grid-item right-column">
          <p style={textStyles[3]}>Your sentence here.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
