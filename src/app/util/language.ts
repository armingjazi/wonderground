
export const languages = ["ENGLISH", "ESPAÑOL", "CATALÀ"] as const;
export type Language = (typeof languages)[number];
