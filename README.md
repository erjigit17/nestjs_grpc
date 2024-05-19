$ npx @nestjs/cli generate app auth

$ npm start
$ npm start auth

$ npx @nestjs/cli generate resource users

$ npm i @nestjs/microservices @grpc/grpc-js @grpc/proto-loader ts-proto

$ brew install protobuf

$ protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/auth.proto

$ protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/supplier.proto

$ npx @nestjs/cli generate app catalog
$ npx @nestjs/cli generate resource supplier

$ npx @nestjs/cli generate lib common


```proto
syntax = "proto3";

package example;

// Scalar Value Types with descriptions
syntax = "proto3";

package example;

// Scalar Value Types with descriptions
message ScalarTypes {
    double double_value = 1;  // A double-precision floating point value (TS: number)
    float float_value = 2;    // A single-precision floating point value (TS: number)
    int32 int32_value = 3;    // A 32-bit signed integer (TS: number)
    int64 int64_value = 4;    // A 64-bit signed integer (TS: number | string)
    uint32 uint32_value = 5;  // A 32-bit unsigned integer (TS: number)
    uint64 uint64_value = 6;  // A 64-bit unsigned integer (TS: number | string)
    sint32 sint32_value = 7;  // A 32-bit signed integer with zigzag encoding (TS: number)
    sint64 sint64_value = 8;  // A 64-bit signed integer with zigzag encoding (TS: number | string)
    fixed32 fixed32_value = 9; // A 32-bit signed fixed-length integer (TS: number)
    fixed64 fixed64_value = 10; // A 64-bit signed fixed-length integer (TS: number | string)
    sfixed32 sfixed32_value = 11; // A 32-bit signed fixed-length integer with zigzag encoding (TS: number)
    sfixed64 sfixed64_value = 12; // A 64-bit signed fixed-length integer with zigzag encoding (TS: number | string)
    bool bool_value = 13;     // A boolean value (true or false) (TS: boolean)
    string string_value = 14; // A string value (UTF-8 encoded) (TS: string)
    bytes bytes_value = 15;   // A sequence of bytes (binary data) (TS: Uint8Array | string)
}

// Enumeration with description
enum Status {
    ACTIVE = 0;   // The status is active (TS: number)
    INACTIVE = 1; // The status is inactive (TS: number)
}

// Composite Types with description
message NestedMessage {
    ScalarTypes scalar_types = 1; // A message containing various scalar types (TS: ScalarTypes)
    Status status = 2;            // An enumeration indicating the status (TS: Status)
}

// Repeated Field with description
message RepeatedField {
    repeated int32 values = 1; // A list of 32-bit signed integers (TS: number[])
}

// Map Field with description
message MapField {
    map<string, int32> key_value_pairs = 1; // A map with string keys and 32-bit signed integer values (TS: { [key: string]: number })
}

// Service definition with description
service ExampleService {
    rpc GetNestedMessage (NestedMessageRequest) returns (NestedMessageResponse); // Retrieves a NestedMessage
}

// Request and Response Messages with descriptions
message NestedMessageRequest {
    int32 id = 1; // The unique identifier for the request (TS: number)
}

message NestedMessageResponse {
    NestedMessage nested_message = 1; // The nested message in the response (TS: NestedMessage)
}
```
