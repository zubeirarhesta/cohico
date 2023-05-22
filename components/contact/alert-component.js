import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Spacer,
  Spinner,
} from "@chakra-ui/react";

export default function AlertComponent(props) {
  return (
    <Alert
      status={props.status}
      width="90%"
      maxWidth="30rem"
      margin={["1rem auto", "2rem auto"]}
    >
      {props.isSpining ? <Spinner mr={["10px"]} /> : <AlertIcon />}
      <Box>
        <AlertTitle>{props.title}</AlertTitle>
        <AlertDescription>{props.message}</AlertDescription>
      </Box>
      <Spacer />
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={0}
        top={0}
        onClick={props.onClose}
      />
    </Alert>
  );
}
