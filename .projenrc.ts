// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { awscdk } from "projen";
import { NodePackageManager, TrailingComma } from "projen/lib/javascript";

const project = new awscdk.AwsCdkTypeScriptApp({
	cdkVersion: "2.137.0",
	cdkVersionPinning: true,
	depsUpgrade: false,
	githubOptions: {
		mergify: false,
	},
	copyrightOwner: "Amazon.com, Inc. or its affiliates. All Rights Reserved.",
	license: "MIT-0",
	packageManager: NodePackageManager.NPM,
	pullRequestTemplate: true,
	pullRequestTemplateContents: [
		"*Issue #, if available:*",
		"*Description of changes:*",
		"By submitting this pull request, I confirm that you can use, modify, copy, and redistribute this contribution, under the terms of your choice.",
	],
	defaultReleaseBranch: "main",
	name: "slack-bedrock-integration",
	projenrcTs: true,
	projenVersion: "0.81.8",
	deps: ["cdk-nag@2.28.104"],
	devDeps: ["license-checker@25.0.1"],
	gitignore: ["*.dtmp", "*.bkp", ".env*", "!.env-sample", "aggregated_results.txt", "acat-output.json", "acat_report/*"],
	prettier: true,
	prettierOptions: {
		settings: {
			tabWidth: 4,
			useTabs: true,
			trailingComma: TrailingComma.ALL,
			printWidth: 140,
		},
	},
	eslintOptions: {
		prettier: true,
		dirs: ["src", "src/**", "test", "test/**"],
	},
});

project.synth();
