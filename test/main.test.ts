// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { SlackBotStack } from "../src/stack";

test("Snapshot", () => {
	const app = new App();
	const stack = new SlackBotStack(app, "test", {});

	const template = Template.fromStack(stack);
	expect(template.toJSON()).toMatchSnapshot();
});
