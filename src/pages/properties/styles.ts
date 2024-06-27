import styled from 'styled-components';

export const Container = styled.main`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  margin: auto;
  padding: 2rem;
  width: 50%;
  height: 100vh; 
  background: ${(props) => props.theme.colors.primaryBackground}
`;

export const Title = styled.h1`
  font-weight: var(--font-bold-w700);
  margin: 1.2rem auto;
`;

export const Label = styled.label`
  font-size: var(--font-16);
  font-weight: var(--font-regular-w400);
  padding-bottom: 1rem;
`;

export const Input = styled.input`
  border: 1px solid #3A3B5A;
  border-radius: 4px;
  padding: 1rem;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const Col2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const Col2width = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem;
  gap: 1rem;
`;

export const Button = styled.button<{$primary?: boolean;}>`
  border: 1px solid ${(props) => props.$primary ? 
  '#ffffff' :  '#1E1E2D'};
  border-radius: 4px;
  height: 5rem;
  margin-top: 1rem;
  background: ${(props) => props.$primary ? 
  '#1E1E2D' : '#25273E'};
  color: ${(props) => props.$primary ? 
  '#E4E8F1' : '#A0A3B1'};
`;
