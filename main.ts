import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Diagnosis: chronic prompt-dependency — you now ask a chatbot for permission before trusting your own feelings, then rate my empathy five stars.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
