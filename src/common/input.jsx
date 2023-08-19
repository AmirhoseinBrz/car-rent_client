export default function input({
  id,
  labelTitle,
  value,
  checked,
  onchange,
  type,
  min,
  max,
  labelClassName,
  inputClassName,
  placeholder,
  name,
}) {
  return (
    <label htmlFor={id} className={labelClassName}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        {...(type == "checkbox" ? (checked = { checked }) : null)}
        {...(type == "range" ? (min = { min }) : null)}
        {...(type == "range" ? (max = { max }) : null)}
        onChange={onchange}
        className={inputClassName}
        {...(type == "text" ? (placeholder = { placeholder }) : null)}
      />
      {labelTitle}
    </label>
  );
}
