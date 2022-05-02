export interface InputProps {
  id: string;
  labelName: string;
  value: string;
  updateFormState: (name: string) => void; 
  formErrorState: boolean;
  updateFormErrorState: (value: boolean) => void;
}