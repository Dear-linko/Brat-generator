"use client"
import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';

const BratGenerator = ({ BratGeneratorLanguageText }) => {
  const [text, setText] = useState(BratGeneratorLanguageText.default_text);
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#9ACD32');
  const [width, setWidth] = useState(594);
  const [height, setHeight] = useState(594);
  const [borderRadius, setBorderRadius] = useState(0);
  const [fontSize, setFontSize] = useState(48);
  const bratRef = useRef(null);

  const handleTextChange = (e) => setText(e.target.value);
  const handleTextColorChange = (e) => setTextColor(e.target.value);
  const handleBackgroundColorChange = (e) => setBackgroundColor(e.target.value);
  const handleWidthChange = (e) => setWidth(Number(e.target.value));
  const handleHeightChange = (e) => setHeight(Number(e.target.value));
  const handleBorderRadiusChange = (e) => setBorderRadius(Number(e.target.value));
  const handleFontSizeChange = (e) => setFontSize(Number(e.target.value));

  const downloadImage = () => {
    if (bratRef.current) {
      toPng(bratRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'brat-image.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
  };

  const resetSettings = () => {
    setText('brat');
    setTextColor('#000000');
    setBackgroundColor('#9ACD32');
    setWidth(594);
    setHeight(594);
    setBorderRadius(0);
    setFontSize(48);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label className="block mb-2 font-bold">{BratGeneratorLanguageText.enter_text}</label>
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              className="w-full p-2 border rounded dark:bg-gray-900"
            />
          </div>
          
          <div className="mb-4 flex justify-between">
              <div className="w-1/2 pr-2">
                <label className="block mb-2 font-bold">{BratGeneratorLanguageText.text_color}</label>
              <div className="flex items-center">
                <input
                  type="color"
                  value={textColor}
                  onChange={handleTextColorChange}
                  className="w-full h-10"
                />
              </div>
            </div>
            
            <div className="w-1/2 pl-2">
              <label className="block mb-2 font-bold">{BratGeneratorLanguageText.background_color}</label>
              <div className="flex items-center">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={handleBackgroundColorChange}
                  className="w-full h-10"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-bold">{BratGeneratorLanguageText.width}: {width}px</label>
            <input
              type="range"
              min="100"
              max="1000"
              value={width}
              onChange={handleWidthChange}
              className="w-full dark:bg-gray-900"
            />
            <input
              type="number"
              value={width}
              onChange={handleWidthChange}
              className="w-20 p-1 border rounded mt-2 dark:bg-gray-900"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-bold">{BratGeneratorLanguageText.height}: {height}px</label>
            <input
              type="range"
              min="100"
              max="1000"
              value={height}
              onChange={handleHeightChange}
              className="w-full dark:bg-gray-900"
            />
            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              className="w-20 p-1 border rounded mt-2 dark:bg-gray-900"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-bold">{BratGeneratorLanguageText.border_radius}: {borderRadius}px</label>
            <input
              type="range"
              min="0"
              max="300"
              value={borderRadius}
              onChange={handleBorderRadiusChange}
              className="w-full dark:bg-gray-900"
            />
            <input
              type="number"
              value={borderRadius}
              onChange={handleBorderRadiusChange}
              className="w-20 p-1 border rounded mt-2 dark:bg-gray-900"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-bold">{BratGeneratorLanguageText.font_size}: {fontSize}px</label>
            <input
              type="range"
              min="12"
              max="120"
              value={fontSize}
              onChange={handleFontSizeChange}
              className="w-full dark:bg-gray-900"
            />
            <input
              type="number"
              value={fontSize}
              onChange={handleFontSizeChange}
              className="w-20 p-1 border rounded mt-2 dark:bg-gray-900"
            />
          </div>
          
          <div className="flex justify-between mt-8">
            <button onClick={resetSettings} className="border px-4 py-2 rounded dark:bg-gray-900">{BratGeneratorLanguageText.reset}</button>
            <button onClick={downloadImage} className="bg-green-400 px-4 py-2 rounded">{BratGeneratorLanguageText.download_image}</button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-4 rounded">
          <div
            ref={bratRef}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor,
              borderRadius: `${borderRadius}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '100%',
              maxHeight: '100%',
              overflow: 'hidden',
            }}
          >
            <span style={{ 
              color: textColor, 
              fontSize: `${fontSize}px`, 
              fontWeight: 'bold',
              wordBreak: 'break-word',
              textAlign: 'center',
              padding: '10px',
            }}>
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BratGenerator;