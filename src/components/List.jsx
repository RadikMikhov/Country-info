import styled from "styled-components";

const Wrapper = styled.section`
   width: 100%;
   padding: 15px 0;
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   gap: 15px;
   @media (min-width: 767px) {
      grid-template-columns: repeat(1, 2fr);
      gap: 25px;
      padding: 20px 0;
   }
   @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
    }
`;

const List = ({children}) => {
   return (
      <Wrapper>
         {children}
      </Wrapper>
   );
};

export default List;