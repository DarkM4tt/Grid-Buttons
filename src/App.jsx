/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const App = () => {
  const [textStyles, setTextStyles] = useState([
    {
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fontSize: "16px",
      color: "#fcba03",
    },
    {
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fontSize: "16px",
      color: "#fcba03",
    },
    {
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fontSize: "16px",
      color: "#fcba03",
    },
    {
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fontSize: "16px",
      color: "#fcba03",
    },
  ]);

  const handleToggleStyle = (property, value, index) => {
    setTextStyles((prevStyles) => {
      const newStyles = [...prevStyles];
      newStyles[index] = {
        ...prevStyles[index],
        [property]: prevStyles[index][property] === value ? "normal" : value,
      };
      return newStyles;
    });
  };

  const handleFontSizeChange = (event, index) => {
    setTextStyles((prevStyles) => {
      const newStyles = [...prevStyles];
      newStyles[index] = {
        ...prevStyles[index],
        fontSize: event.target.value + "px",
      };
      return newStyles;
    });
  };

  const handleColorChange = (event, index) => {
    setTextStyles((prevStyles) => {
      const newStyles = [...prevStyles];
      newStyles[index] = {
        ...prevStyles[index],
        color: event.target.value,
      };
      return newStyles;
    });
  };

  const ButtonGroup = ({ index }) => {
    return (
      <div className="button-group">
        <input
          type="button"
          value="Bold"
          onClick={() => handleToggleStyle("fontWeight", "bold", index)}
        />
        <input
          type="button"
          value="Italic"
          onClick={() => handleToggleStyle("fontStyle", "italic", index)}
        />
        <input
          type="button"
          value="Underline"
          onClick={() =>
            handleToggleStyle("textDecoration", "underline", index)
          }
        />
      </div>
    );
  };

  const TextContainer = ({ index, text }) => {
    return (
      <div className="grid-item right-column">
        <p style={textStyles[index]}>{text}</p>
      </div>
    );
  };

  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-item left-column">
          <ButtonGroup index={0} />
          <div className="input-group">
            <input
              type="number"
              min="10"
              max="50"
              defaultValue="16"
              onChange={(e) => handleFontSizeChange(e, 0)}
            />
            <input
              type="color"
              value="#fcba03"
              onChange={(e) => handleColorChange(e, 0)}
            />
          </div>
        </div>
        <TextContainer index={0} text="My name is Prabhat" />
      </div>
      <div className="grid-row">
        <div className="grid-item left-column">
          <ButtonGroup index={1} />
          <div className="input-group">
            <input
              type="number"
              min="10"
              max="50"
              defaultValue="16"
              onChange={(e) => handleFontSizeChange(e, 1)}
            />
            <input
              type="color"
              value="#fcba03"
              onChange={(e) => handleColorChange(e, 1)}
            />
          </div>
        </div>
        <TextContainer index={1} text="My name is Prabhat" />
      </div>
      <div className="grid-row">
        <div className="grid-item left-column">
          <ButtonGroup index={2} />
          <div className="input-group">
            <input
              type="number"
              min="10"
              max="50"
              defaultValue="16"
              onChange={(e) => handleFontSizeChange(e, 2)}
            />
            <input
              type="color"
              value="#fcba03"
              onChange={(e) => handleColorChange(e, 2)}
            />
          </div>
        </div>
        <TextContainer index={2} text="My name is Prabhat" />
      </div>
      <div className="grid-row">
        <div className="grid-item left-column">
          <ButtonGroup index={3} />
          <div className="input-group">
            <input
              type="number"
              min="10"
              max="50"
              defaultValue="16"
              onChange={(e) => handleFontSizeChange(e, 3)}
            />
            <input
              type="color"
              value="#fcba03"
              onChange={(e) => handleColorChange(e, 3)}
            />
          </div>
        </div>
        <TextContainer index={3} text="My name is Prabhat" />
      </div>
    </div>
  );
};

export default App;
