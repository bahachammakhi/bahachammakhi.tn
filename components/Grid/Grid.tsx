import styled from "styled-components";

const Row = styled.div`
  display: flex;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: ${(props: any) => (props.gap ? props.gap : "10px")};
`;
const Col = styled.div`
  grid-column: ${(props: any) =>
    props.span ? "1/ span" + props.span : "1/ span 1 "};
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { Row, Col, Grid, Flex };
