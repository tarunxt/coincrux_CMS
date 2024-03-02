import React, { useEffect, useState } from "react";
import { FieldProps } from "firecms";
import { FixedSizeList as List } from "react-window";

interface Option {
  value: string;
  label: string;
}
const AssetSelect: React.FC<FieldProps<string, Option>> = ({
  property,
  value,
  setValue,
}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [rowHeight, setRowHeight] = useState(30);

  useEffect(() => {
    fetchOptions();
  }, []);
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [showList, setShowList] = useState<boolean>(true); // Control the visibility of the list


  const fetchOptions = () => {
    // fetch('https://script.google.com/macros/s/AKfycbzEUQ0denCrLSCNImhiDLqf8d3K6cd3LKh7Ste-Vt2K_7tfeyVt-QXhtOjAloCFYoyWZg/exec')
    // fetch('https://script.google.com/macros/s/AKfycbwW6F-Gqc1z4n17d19BfpuISRl9CehyMqGhr4r-C095cCUK9mlGl1_vl8peOqw9RlXDAg/exec')
    fetch ('https://script.google.com/macros/s/AKfycbx41PQfs76I3u3GbQYQb3rPyUWeYFF3ywhSOvMrOFITkN9guFTAUVTgfVNWvJ5rVcyQxw/exec')
      .then(response => response.json())
      .then(data => {
        // Remove duplicate entries
        const uniqueOptions: any[] = [];
        const seen = new Set();
        data.data.forEach((option: { value: unknown; }) => {
          if (!seen.has(option.value)) {
            uniqueOptions.push(option);
            seen.add(option.value);
          }
        });
        setOptions(uniqueOptions);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleInputChange = (inputValue: string) => {
    // Clear selected value when input is empty
    if (inputValue === "") {
      setValue(null);
      setSelectedLabel("");
      setShowList(true); 
    }
    else{
      setValue(inputValue);
      setSelectedLabel(inputValue);
    }
  
    // Filter options based on input value
    const filtered = inputValue === "" ?
      options :
      options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    setFilteredOptions(filtered);
  };
  
  
  

  const handleChange = (selectedOption: Option | null) => {
    setValue(selectedOption ? selectedOption.value : null);
  };

  const rowRenderer = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const option = filteredOptions[index];
    return (
      <div style={style}>
        <button onClick={() => handleClick(option)}>{option.label}</button>
      </div>
    );
  };
  
  const handleClick = (option: Option) => {
    setValue(option.value);
    setSelectedLabel(option.label);
    setShowList(false); // Hide the list after an option is selected
  };
  
  
  
  return (
    <div style={{ padding: "10px", borderRadius: "5px" }}>
      <label htmlFor={`field-${property.name}`}>{property.name}</label>
      <p>{property.description}</p>
      <input
        type="text"
        value={selectedLabel}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Search..."
        style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
      />
      {showList && (
        <List
          height={200} // Adjust the height as needed
          itemCount={filteredOptions.length}
          itemSize={rowHeight}
          width={900} 
        >
          {rowRenderer}
        </List>
      )}
    </div>
  );
  
};

export default AssetSelect;
