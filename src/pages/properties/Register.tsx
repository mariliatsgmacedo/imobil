import { useForm } from "react-hook-form";
import {
  Button,
  Col2,
  Col2width,
  Container,
  Input,
  InputContent,
  Label,
  Title,
} from "./styles";

export const Register = () => {
  const { register } = useForm();

  return (
    <>
      <Container>
        <Title>Cadastro de propriedade</Title>
        <InputContent>
          <Label>Nome</Label>
          <Input placeholder="Digite o nome" {...register} />
        </InputContent>
        <Col2width>
          <InputContent>
            <Label>Rua</Label>
            <Input placeholder="Digite a rua da propriedade" {...register} />
          </InputContent>
          <InputContent>
            <Label>Número</Label>
            <Input placeholder="Digite o número" {...register} />
          </InputContent>
        </Col2width>

        <InputContent>
          <Label>Complemento</Label>
          <Input placeholder="Digite o complemento" {...register} />
        </InputContent>

        <Col2>
          <InputContent>
            <Label>Bairro</Label>
            <Input placeholder="Selecione..." {...register} />
          </InputContent>
          <InputContent>
            <Label>Cidade</Label>
            <Input placeholder="Selecione..." {...register} />
          </InputContent>
        </Col2>

        <Col2>
        <InputContent>
            <Label>Estado</Label>
            <Input placeholder="Selecione..." {...register} />
          </InputContent>
          <InputContent>
            <Label>País</Label>
            <Input placeholder="Selecione..." {...register} />
          </InputContent></Col2>
        <Button $primary type="submit">Salvar</Button>
      </Container>
    </>
  );
};
