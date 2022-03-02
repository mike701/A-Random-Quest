import { useState } from "react";
//Inspired By Immanuel Currah
export function useForm(defaultInput) {
  const [form, setForm] = useState(defaultInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return { handleChange, form, setForm };
}