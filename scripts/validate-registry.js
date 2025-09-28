const { validateComponentRegistry, logValidationResults, testComponentRetrieval } = require("../lib/registry-validator")

// Run validation
console.log("Starting component registry validation...\n")

const validationResult = validateComponentRegistry()
logValidationResults(validationResult)

console.log("\nTesting component retrieval...")
const retrievalTest = testComponentRetrieval()

console.log("\n=== Final Results ===")
console.log(`Registry Validation: ${validationResult.success ? "✅ PASSED" : "❌ FAILED"}`)
console.log(`Component Retrieval: ${retrievalTest ? "✅ PASSED" : "❌ FAILED"}`)

if (validationResult.success && retrievalTest) {
  console.log("\n🎉 All tests passed! Component registry is working correctly.")
} else {
  console.log("\n⚠️ Some tests failed. Please review the errors above.")
}
