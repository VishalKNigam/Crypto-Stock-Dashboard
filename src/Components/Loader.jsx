import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

export const Loader = () => {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      textAlign="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="orange.400"
        size="xl"
      />
    </Box>
  );
};
