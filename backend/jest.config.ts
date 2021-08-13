/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 */

export default {
    bail: 1,
    clearMocks: true,
    preset: "ts-jest",
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    roots: ["<rootDir>/src"],
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
    },
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
    testPathIgnorePatterns: ["./node_modules/"],
};
