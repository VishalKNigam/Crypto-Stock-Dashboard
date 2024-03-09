import { Flex, Input, Select } from "@chakra-ui/react";
import React from "react";

export const Toolbar = ({ setSearch, setOrder, setCurrency }) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      bg="#f0f0f0" 
      p={4} 
      borderRadius="md" 
      boxShadow="md" 
    >
      <Input
        placeholder="Search"
        maxW="500px"
        onChange={(e) => setSearch(e.target.value)}
        bg="white" 
        border="1px solid #ccc"
        borderRadius="md" 
        _focus={{
          borderColor: "blue.400", 
          boxShadow: "outline", 
        }}
      />
      <Flex alignItems={"center"} gap="1rem">
        <Select
          placeholder="Sort"
          onChange={(e) => setOrder(e.target.value)}
          bg="white" 
          border="1px solid #ccc" 
          borderRadius="md" 
          _focus={{
            borderColor: "blue.400", 
            boxShadow: "outline", 
          }}
        >
          <option value="market_cap_asc">Low To High</option>
          <option value="market_cap_desc">High To Low</option>
        </Select>
        <Select
          placeholder="Currency"
          defaultValue={"inr"}
          onChange={(e) => setCurrency(e.target.value)}
          bg="white" 
          border="1px solid #ccc" 
          borderRadius="md" 
          _focus={{
            borderColor: "blue.400", 
            boxShadow: "outline", 
          }}
        >
          <option value="inr">₹INR</option>
          <option value="usd">$USD</option>
          <option value="eur">€EURO</option>
        </Select>
      </Flex>
    </Flex>
  );
};
