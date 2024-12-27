/**
 * Node modules
 */
import PropTypes from "prop-types"

const FieldText = ({
    label,
    name,
    register,
    required = false,
    errors,
    type = "text",
    rules,
    classes = "",
    fieldClasses = "",
    ...rest
}) => {
  return (
   <div className={`text-field-wrapper ${classes}`}>
    <label 
        htmlFor={name} 
        className="label-text"
    >
        {label}
    </label>
    <input 
        type={type} 
        className={`text-field ${fieldClasses}`}
        id={name}
        {...register(name, {...rules, required})}
        aria-invalid={errors[name] ? "true" : "false"}
        {...rest}
    />
    {
        errors[name] && (
            <p 
                className="helper-text"
                role="alert"
            >
                {errors[name].message || `${label} is required`}
            </p>
        )
    }
   </div> 
)
}

FieldText.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    required: PropTypes.bool,
    errors: PropTypes.object,
    type: PropTypes.string,
    rules: PropTypes.object,
    classes: PropTypes.string,
    fieldClasses: PropTypes.string,
}

export default FieldText