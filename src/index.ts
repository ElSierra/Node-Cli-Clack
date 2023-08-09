import { text } from "@clack/prompts";

(async () => {
  await text({
    message: "What is the meaning of life?",
    placeholder: "Not sure",
    initialValue: "42",
    validate(value) {
      if (value.length === 0) return `Value is required!`;
    },
  });
})();
