import { deterministicPartitionKey } from "./dpk";
const MAX_PARTITION_KEY_LENGTH = 256;

describe("deterministicPartitionKey", () => {
  it("returns '0' if no event is provided", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });

  it("returns the partition key if it exists in the event", () => {
    const event = { partitionKey: "abc" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("abc");
  });

  it("creates a deterministic partition key from the event data", () => {
    const event = { data: { foo: "bar" } };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });

  it("hashes the partition key if it exceeds the maximum length", () => {
    const longKey = "a".repeat(300);
    const event = { partitionKey: longKey };
    const result = deterministicPartitionKey(event);
    expect(result.length).toBe(MAX_PARTITION_KEY_LENGTH / 2);
  });
});
