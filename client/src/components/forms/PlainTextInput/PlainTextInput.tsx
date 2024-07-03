import { Input } from "@chakra-ui/react";

interface PlainTextInputProps {
  onChange: (e: string) => void;
  placeholder: string;
}

/**
 * @name PlainTextInput
 * @type {React.FC<{ PlainTextInputProps }>}
 * @param onChange handles changes in input field
 * @param placeholder modifies placeholder texts

 * @description A basic text input form to manage email, names and other
 * plain text user inputs.
 * @returns {React.ReactNode}
 */

const PlainTextInput: React.FC<PlainTextInputProps> = ({
  onChange,
  placeholder,
}: PlainTextInputProps): React.ReactNode => {
  return <Input onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />;
};

export default PlainTextInput;
