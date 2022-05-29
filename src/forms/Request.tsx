import * as React from "react";
import Form from "./component/Form";
import { IFormValues } from "./type";
import Input from "./component/Input";
import styled from "styled-components";
import Select from "./component/Select";
import Button from "./component/Button";
import CheckBox from "./component/CheckBox";
import ButtonRadio from "./component/ButtonRadio";
import { ORGANISMOS, EMPRESAS, IDENTIDADES } from "./data/data";
import { useForm, SubmitHandler } from "react-hook-form";

function RequestModel() {
  
  const [stateRadio, setStateRadio] = React.useState("jur");
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  let conditionContent;
  return (
    <Container>
      <Form colorForm="red-form" title="Solicitud de Generación">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content-input">
            <Input
              title="ID"
              label="Id"
              type="number"
              placeholder="Escribe tu ID"
              register={register}
              required
            />
            <Input
              title="Tomo"
              label="Tomo"
              type="number"
              placeholder="Escribe tu Tomo"
              register={register}
              required
            />
            <Input
              title="Folio"
              label="Folio"
              type="number"
              placeholder="Escribe tu Folio"
              register={register}
              required
            />
          </div>
          <div className="content-input">
            <Input
              title="Correo Electrónico"
              label="Correo Electrónico"
              type="text"
              register={register}
              required
              placeholder="Escribe tu correo"
            />
            <Input
              title="Teléfono"
              label="Teléfono"
              type="number"
              register={register}
              required
              placeholder="Escribe tu teléfono"
            />
          </div>
          <div className="content-input">
            <ButtonRadio
              label="Persona Jurídica"
              setStateRadio={setStateRadio}
              value="jur"
              checked={stateRadio == "jur" ? true : false}
              name="person"
              type="radio"
            />
            <ButtonRadio
              label="Persona Natural"
              setStateRadio={setStateRadio}
              value="nat"
              name="person"
              checked={stateRadio == "nat" ? true : false}
              type="radio"
            />
          </div>
          {stateRadio == "jur" && (
            <>
              <div className="content-select">
                <Select title="Organismo" data={ORGANISMOS} />
                <Select title="Empresa o Institución" data={EMPRESAS} />
              </div>
              <div className="content-input">
                <Input
                  title="Cargo"
                  label="Cargo"
                  type="text"
                  register={register}
                  required
                  placeholder="Escribe tu cargo"
                />
                <Input
                  title="Represante"
                  label="Representantes"
                  type="text"
                  register={register}
                  required
                />
              </div>
            </>
          )}
          {stateRadio == "nat" && (
            <div className="content-input">
              <Select title="Identidad más cercana" data={IDENTIDADES} />
            </div>
          )}
          <div className="content-input">
            <CheckBox
              label="Acepto los términos y condiciones"
              type="checkbox"
            />
          </div>
          <div className="content-button">
            <Button type="submit" name="Siguiente" />
            <Button type="button" name="Cancelar" />
          </div>
        </form>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-input,
  .content-select {
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  .content-select {
    gap: 1rem;
  }
  .content-button {
    max-width: 500px;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 1rem;
  }
`;

export default RequestModel;
