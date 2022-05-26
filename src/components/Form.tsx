import * as React from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

type FormValues = {
  email: string;
  message: string;
};

const ReactHookForm = () => {
  const [close, setClose] = React.useState<boolean>(false);

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      message: "",
    },
  });
  const url: string = "https://formspree.io/f/mbjwalqp";
  function onSubmit(data: FormValues) {
    setClose(true);
    axios
      .post("https://formspree.io/f/mbjwalqp", {
        data: data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <StyledForm>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              required: true,
            }}
            render={({ field, formState: { errors, isSubmitted } }) => (
              <div className="textfield">
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  label="Email"
                  color= {errors.email ? "secondary" : "primary"}
                />
                {errors.email?.type === "pattern" && (
                  <span className="textfield__warning">
                    email includes an @ symbol !
                  </span>
                )}
                {errors.email?.type === "required" && (
                  <span className="textfield__warning">
                    email is required !
                  </span>
                )}
              </div>
            )}
          />
          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors } }) => (
              <div className="textfield">
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  label="Message"
                  color={errors.message ? "secondary" : "primary"}
                />
                {errors.message?.type === "required" && (
                  <span className="textfield__warning">
                    This field must not be empty !
                  </span>
                )}
              </div>
            )}
          />
          <Button
            className="button-submit"
            type="submit"
            size="medium"
            color="primary"
            variant="contained"
          >
            send
          </Button>
        </form>
      </StyledForm>
    </>
  );
};
export default ReactHookForm;

const StyledForm = styled.div`
  .form {
    text-align: center;
  }
  .textfield {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .textfield__warning {
    margin: 0 0 2em 0;
    color: #c51162;
    text-transform: uppercase;
    font-size: 10px;
  }
  .button-submit {
    margin: 2em 0;
  }
`;
