<?php
// This file was auto-generated from sdk-root/src/data/iot-jobs-data/2017-09-29/api-2.json
return [ 'version' => '2.0', 'metadata' => [ 'apiVersion' => '2017-09-29', 'endpointPrefix' => 'data.jobs.iot', 'protocol' => 'rest-json', 'serviceFullName' => 'AWS IoT Jobs Data Plane', 'signatureVersion' => 'v4', 'signingName' => 'iot-jobs-data', 'uid' => 'iot-jobs-data-2017-09-29', ], 'operations' => [ 'DescribeJobExecution' => [ 'name' => 'DescribeJobExecution', 'http' => [ 'method' => 'GET', 'requestUri' => '/things/{thingName}/jobs/{jobId}', ], 'input' => [ 'shape' => 'DescribeJobExecutionRequest', ], 'output' => [ 'shape' => 'DescribeJobExecutionResponse', ], 'errors' => [ [ 'shape' => 'InvalidRequestException', ], [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'ThrottlingException', ], [ 'shape' => 'ServiceUnavailableException', ], [ 'shape' => 'CertificateValidationException', ], [ 'shape' => 'TerminalStateException', ], ], ], 'GetPendingJobExecutions' => [ 'name' => 'GetPendingJobExecutions', 'http' => [ 'method' => 'GET', 'requestUri' => '/things/{thingName}/jobs', ], 'input' => [ 'shape' => 'GetPendingJobExecutionsRequest', ], 'output' => [ 'shape' => 'GetPendingJobExecutionsResponse', ], 'errors' => [ [ 'shape' => 'InvalidRequestException', ], [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'ThrottlingException', ], [ 'shape' => 'ServiceUnavailableException', ], [ 'shape' => 'CertificateValidationException', ], ], ], 'StartNextPendingJobExecution' => [ 'name' => 'StartNextPendingJobExecution', 'http' => [ 'method' => 'PUT', 'requestUri' => '/things/{thingName}/jobs/$next', ], 'input' => [ 'shape' => 'StartNextPendingJobExecutionRequest', ], 'output' => [ 'shape' => 'StartNextPendingJobExecutionResponse', ], 'errors' => [ [ 'shape' => 'InvalidRequestException', ], [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'ThrottlingException', ], [ 'shape' => 'ServiceUnavailableException', ], [ 'shape' => 'CertificateValidationException', ], ], ], 'UpdateJobExecution' => [ 'name' => 'UpdateJobExecution', 'http' => [ 'method' => 'POST', 'requestUri' => '/things/{thingName}/jobs/{jobId}', ], 'input' => [ 'shape' => 'UpdateJobExecutionRequest', ], 'output' => [ 'shape' => 'UpdateJobExecutionResponse', ], 'errors' => [ [ 'shape' => 'InvalidRequestException', ], [ 'shape' => 'ResourceNotFoundException', ], [ 'shape' => 'ThrottlingException', ], [ 'shape' => 'ServiceUnavailableException', ], [ 'shape' => 'CertificateValidationException', ], [ 'shape' => 'InvalidStateTransitionException', ], ], ], ], 'shapes' => [ 'CertificateValidationException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'errorMessage', ], ], 'error' => [ 'httpStatusCode' => 400, ], 'exception' => true, ], 'DescribeJobExecutionJobId' => [ 'type' => 'string', 'pattern' => '[a-zA-Z0-9_-]+|^\\$next', ], 'DescribeJobExecutionRequest' => [ 'type' => 'structure', 'required' => [ 'jobId', 'thingName', ], 'members' => [ 'jobId' => [ 'shape' => 'DescribeJobExecutionJobId', 'location' => 'uri', 'locationName' => 'jobId', ], 'thingName' => [ 'shape' => 'ThingName', 'location' => 'uri', 'locationName' => 'thingName', ], 'includeJobDocument' => [ 'shape' => 'IncludeJobDocument', 'location' => 'querystring', 'locationName' => 'includeJobDocument', ], 'executionNumber' => [ 'shape' => 'ExecutionNumber', 'location' => 'querystring', 'locationName' => 'executionNumber', ], ], ], 'DescribeJobExecutionResponse' => [ 'type' => 'structure', 'members' => [ 'execution' => [ 'shape' => 'JobExecution', ], ], ], 'DetailsKey' => [ 'type' => 'string', 'max' => 128, 'min' => 1, 'pattern' => '[a-zA-Z0-9:_-]+', ], 'DetailsMap' => [ 'type' => 'map', 'key' => [ 'shape' => 'DetailsKey', ], 'value' => [ 'shape' => 'DetailsValue', ], ], 'DetailsValue' => [ 'type' => 'string', 'max' => 1024, 'min' => 1, 'pattern' => '[^\\p{C}]*+', ], 'ExecutionNumber' => [ 'type' => 'long', ], 'ExpectedVersion' => [ 'type' => 'long', ], 'GetPendingJobExecutionsRequest' => [ 'type' => 'structure', 'required' => [ 'thingName', ], 'members' => [ 'thingName' => [ 'shape' => 'ThingName', 'location' => 'uri', 'locationName' => 'thingName', ], ], ], 'GetPendingJobExecutionsResponse' => [ 'type' => 'structure', 'members' => [ 'inProgressJobs' => [ 'shape' => 'JobExecutionSummaryList', ], 'queuedJobs' => [ 'shape' => 'JobExecutionSummaryList', ], ], ], 'IncludeExecutionState' => [ 'type' => 'boolean', ], 'IncludeJobDocument' => [ 'type' => 'boolean', ], 'InvalidRequestException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'errorMessage', ], ], 'error' => [ 'httpStatusCode' => 400, ], 'exception' => true, ], 'InvalidStateTransitionException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'errorMessage', ], ], 'error' => [ 'httpStatusCode' => 409, ], 'exception' => true, ], 'JobDocument' => [ 'type' => 'string', 'max' => 32768, ], 'JobExecution' => [ 'type' => 'structure', 'members' => [ 'jobId' => [ 'shape' => 'JobId', ], 'thingName' => [ 'shape' => 'ThingName', ], 'status' => [ 'shape' => 'JobExecutionStatus', ], 'statusDetails' => [ 'shape' => 'DetailsMap', ], 'queuedAt' => [ 'shape' => 'QueuedAt', ], 'startedAt' => [ 'shape' => 'StartedAt', ], 'lastUpdatedAt' => [ 'shape' => 'LastUpdatedAt', ], 'versionNumber' => [ 'shape' => 'VersionNumber', ], 'executionNumber' => [ 'shape' => 'ExecutionNumber', ], 'jobDocument' => [ 'shape' => 'JobDocument', ], ], ], 'JobExecutionState' => [ 'type' => 'structure', 'members' => [ 'status' => [ 'shape' => 'JobExecutionStatus', ], 'statusDetails' => [ 'shape' => 'DetailsMap', ], 'versionNumber' => [ 'shape' => 'VersionNumber', ], ], ], 'JobExecutionStatus' => [ 'type' => 'string', 'enum' => [ 'QUEUED', 'IN_PROGRESS', 'SUCCEEDED', 'FAILED', 'REJECTED', 'REMOVED', 'CANCELED', ], ], 'JobExecutionSummary' => [ 'type' => 'structure', 'members' => [ 'jobId' => [ 'shape' => 'JobId', ], 'queuedAt' => [ 'shape' => 'QueuedAt', ], 'startedAt' => [ 'shape' => 'StartedAt', ], 'lastUpdatedAt' => [ 'shape' => 'LastUpdatedAt', ], 'versionNumber' => [ 'shape' => 'VersionNumber', ], 'executionNumber' => [ 'shape' => 'ExecutionNumber', ], ], ], 'JobExecutionSummaryList' => [ 'type' => 'list', 'member' => [ 'shape' => 'JobExecutionSummary', ], ], 'JobId' => [ 'type' => 'string', 'max' => 64, 'min' => 1, 'pattern' => '[a-zA-Z0-9_-]+', ], 'LastUpdatedAt' => [ 'type' => 'long', ], 'QueuedAt' => [ 'type' => 'long', ], 'ResourceNotFoundException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'errorMessage', ], ], 'error' => [ 'httpStatusCode' => 404, ], 'exception' => true, ], 'ServiceUnavailableException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'errorMessage', ], ], 'error' => [ 'httpStatusCode' => 503, ], 'exception' => true, 'fault' => true, ], 'StartNextPendingJobExecutionRequest' => [ 'type' => 'structure', 'required' => [ 'thingName', ], 'members' => [ 'thingName' => [ 'shape' => 'ThingName', 'location' => 'uri', 'locationName' => 'thingName', ], 'statusDetails' => [ 'shape' => 'DetailsMap', ], ], ], 'StartNextPendingJobExecutionResponse' => [ 'type' => 'structure', 'members' => [ 'execution' => [ 'shape' => 'JobExecution', ], ], ], 'StartedAt' => [ 'type' => 'long', ], 'TerminalStateException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'errorMessage', ], ], 'error' => [ 'httpStatusCode' => 410, ], 'exception' => true, ], 'ThingName' => [ 'type' => 'string', 'max' => 128, 'min' => 1, 'pattern' => '[a-zA-Z0-9:_-]+', ], 'ThrottlingException' => [ 'type' => 'structure', 'members' => [ 'message' => [ 'shape' => 'errorMessage', ], ], 'error' => [ 'httpStatusCode' => 429, ], 'exception' => true, ], 'UpdateJobExecutionRequest' => [ 'type' => 'structure', 'required' => [ 'jobId', 'thingName', 'status', ], 'members' => [ 'jobId' => [ 'shape' => 'JobId', 'location' => 'uri', 'locationName' => 'jobId', ], 'thingName' => [ 'shape' => 'ThingName', 'location' => 'uri', 'locationName' => 'thingName', ], 'status' => [ 'shape' => 'JobExecutionStatus', ], 'statusDetails' => [ 'shape' => 'DetailsMap', ], 'expectedVersion' => [ 'shape' => 'ExpectedVersion', ], 'includeJobExecutionState' => [ 'shape' => 'IncludeExecutionState', ], 'includeJobDocument' => [ 'shape' => 'IncludeJobDocument', ], 'executionNumber' => [ 'shape' => 'ExecutionNumber', ], ], ], 'UpdateJobExecutionResponse' => [ 'type' => 'structure', 'members' => [ 'executionState' => [ 'shape' => 'JobExecutionState', ], 'jobDocument' => [ 'shape' => 'JobDocument', ], ], ], 'VersionNumber' => [ 'type' => 'long', ], 'errorMessage' => [ 'type' => 'string', ], ],];
