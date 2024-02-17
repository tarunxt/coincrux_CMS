import React, { useState } from "react";
import { TextField } from "@mui/material";
import { FieldProps } from "firecms";

interface CustomColorTextFieldProps {
    color: string;
    minValue?: number;
    maxValue?: number;
}

const CustomColorTextField: React.FC<FieldProps<string, CustomColorTextFieldProps>> = ({
    property,
    value,
    setValue,
    customProps,
    error,
}) => {
    const [charCount, setCharCount] = useState<number>(value?.length || 0);
    
    const isInvalidMin = customProps.minValue !== undefined && value && value.length < customProps.minValue;
    const isInvalidMax = customProps.maxValue !== undefined && value && value.length > customProps.maxValue;

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = evt.target.value;
        setValue(newValue);
        setCharCount(newValue.length);
    };

    return (
        <>
            <div>
                <label htmlFor={`field-${property.name}`}>{property.name}</label>
                <p>{property.description}</p>
            </div>
            <TextField 
                required={property.validation?.required}
                label={property.name}
                id={`field-${property.name}`}
                value={value ?? ""}
                onChange={handleChange}
                fullWidth
                variant={"filled"}
                InputProps={{
                    sx: {
                        color: (isInvalidMin || isInvalidMax) ? 'red' : 'initial',
                        backgroundColor: customProps.color
                    }
                }}
            />

            {(isInvalidMin || isInvalidMax) && (
                <p style={{ color: 'red', marginTop: '6px' }}>
                    {isInvalidMin && `Must be at least ${customProps.minValue} characters`}
                    {isInvalidMax && `Must be at most ${customProps.maxValue} characters`}
                </p>
            )}

            <p style={{ marginTop: '6px' }}>{charCount}/{customProps.maxValue}</p>
        </>
    );
}

export default CustomColorTextField;
