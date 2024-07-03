import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";

interface PasswordInputProps {
  isShowing: boolean;
  setIsShowing: () => void;
  onChange: (e: string) => void;
  placeholder: string;
}

/**
 * @name PasswordInput
 * @type {React.FC<{ PasswordInputProps }>}
 * @param isShowing boolean for show/hide action
 * @param onChange handles changes in input field
 * @param setIsShowing handles on/off for isShowing prop
 * @param placeholder modifies placeholder texts

 * @description An input field strictly meant for handling passwords with 
 * options to show/hide sensitive characters.
 * @returns {React.ReactNode}
 */

const PasswordInput: React.FC<PasswordInputProps> = ({
  isShowing,
  setIsShowing,
  onChange,
  placeholder,
}: PasswordInputProps): React.ReactNode => {
  return (
    <InputGroup size="md">
      <Input
        onChange={(e) => onChange(e.target.value)}
        pr="4.5rem"
        type={isShowing ? "text" : "password"}
        placeholder={placeholder}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={setIsShowing}>
          {isShowing ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
