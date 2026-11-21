import { useForm } from "react-hook-form";
import "./App.css";
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Submitted");
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Student Registration Form</h1>
        <div className="input-field">
          <label htmlFor="fullName">Full Name: </label>
          <input
            type="text"
            className={errors.fullname ? "input-error" : ""}
            id="fullName"
            {...register("fullname", {
              required: true,
              minLength: { value: 5, message: "Minimum length is 5 or above" },
              maxLength: { value: 25, message: "Maximum length is 25 or less" },
            })}
          />
          {errors.fullname && (
            <p className="error-message">{errors.fullname.message}</p>
          )}
        </div>

        <div className="input-field">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            className={errors.email ? "input-error" : ""}
            id="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="input-field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className={errors.password ? "input-error" : ""}
            id="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 7,
                message: "Minimum length of password is 7 or above",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).+$/,
                message:
                  "Must include uppercase, lowercase, number, and symbol",
              },
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="input-field">
          <label htmlFor="course">Select your course: </label>
          <select
            name="course"
            id="course"
            className={errors.course ? "input-error" : ""}
            defaultValue=""
            {...register("course", {
              required: true,
            })}
          >
            <option value="">
              Select a course
            </option>
            <option value="MCA-master-of-computer-application">
              Master of Computer Application(MCA)
            </option>
            <option value="MSDA-master-of-statistics-data-analytics">
              Master of Statistics & Data Analytics(MSDA)
            </option>
            <option value="MSIC-master-of-information-technology">
              Master of Information Technology(MSIC)
            </option>
            <option value="BCA-bachelor-of-computer-application">
              Bachelor of Computer Application(BCA)
            </option>
            <option value="BHM-bachelor-of-hotel-management">
              Bachelor of Hotel Management(BHM)
            </option>
            <option value="BTech-bachelor-of-technology-engineering">
              Bachelor of Technology(BTech-Engineering)
            </option>
          </select>
          {errors.course && (
            <p className="error-message">{errors.course.message}</p>
          )}
        </div>

        <div className="input-field gender">
          <p>Select your gender</p>
          <div id="gender" className={errors.gender ? "input-error" : ""}>
            <label>
              <input
                type="radio"
                value="male"
                {...register("gender", { required: true })}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                value="female"
                {...register("gender", { required: true })}
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                value="other"
                {...register("gender", { required: true })}
              />
              Other
            </label>
          </div>
          {errors.gender && (
            <p className="error-message">{errors.gender.message}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering" : "Register"}
        </button>
      </form>
    </>
  );
};

export default App;
