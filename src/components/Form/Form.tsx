import { useState } from 'react';
import './Form.scss';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //spme action with data

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form className="section__form form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        className="form__input"
        placeholder="Enter a valid email address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        className="form__textarea"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
};
