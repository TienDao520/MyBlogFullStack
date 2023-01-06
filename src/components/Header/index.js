import { Typography } from '@mui/material';
import { TitleHeader } from './styles';
import React from 'react';
import styled from '@emotion/styled';
// import TitleHeader from '@emotion/styled';

const StyledTypography = styled(Typography)`
  background-color: green;
  color: white;
  // font-size: 16px;
`;

export default function Header() {
  // const classes = useStyles();

  return (
    // <Typography variant='h4' align='center'>
    //   <TitleHeader>Blog</TitleHeader>
    // </Typography>
    <StyledTypography variant='h4' align='center'>
      Blog
    </StyledTypography>
  );
}
