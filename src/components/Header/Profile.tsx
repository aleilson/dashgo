import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps){
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Aleilson Gomes</Text>
          <Text color="gray.300" fontSize="small">
            aleilsoncerqueira@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Aleilson Gomes" src="https://github.com/aleilson.png" />
    </Flex>
  );
}