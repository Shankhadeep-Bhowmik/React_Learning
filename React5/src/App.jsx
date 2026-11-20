import { useForm } from "react-hook-form"
import "./App.css";
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form data sending...",data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="firstName">
        <label htmlFor="firstName">
          First Name:
        </label>
          <input type="text"
          className={errors.firstName ? "error-input":""}
          id="firstName"
          {
            ...register("firstName", { required: true,
               maxLength: {value:25, message:"Maximum length is 25 or below"},
               minLength: {value:3, message:"Minimum Length is 3 or above"} 
              })
          }
          />
          {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
      </div>
      <br />
      <div className="middleName">
        <label htmlFor="middleName">
          Middle Name:
        </label>
          <input type="text"
          className={errors.middleName ? "error-input":""}
          id="middleName"
          {
            ...register("middleName", { required: false, 
              maxLength: {value:25, message:"Maximum length is 25 or below"},
              minLength: {value:3, message:"Minimum Length is 3 or above"}
            })
          }
          />
          {errors.middleName && <p className="error-msg">{errors.middleName.message}</p>}
        
      </div>
      <br />
      <div className="lastName">
        <label htmlFor="lastName">
          Last Name:
        </label>
          <input type="text"
          className={errors.lastName ? "error-input":""}
          id="lastName"
          {
            ...register("lastName", { required: true, 
              maxLength: {value:25, message:"Maximum length is 25 or below"},
              minLength: {value:3, message:"Minimum Length is 3 or above"}
            })
          }
          />
          {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
      </div>
      <br />
      <div className="email">
        <label htmlFor="email">
          Email:
        </label>
          <input type="email"
          className={errors.email ? "error-input":""}
          id="email"
          {
            ...register("email", { required: true,
              pattern: {
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:"Invalid email address"
              }
            })
          }
          />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Submit"}</button>
    </form>
  )
}

export default App
