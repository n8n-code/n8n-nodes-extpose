import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';

export class Extpose implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Extpose',
                name: 'N8nDevExtpose',
                icon: { light: 'file:./extpose.svg', dark: 'file:./extpose.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Extpose: Chrome extension in-store analytics and optimization.',
                defaults: { name: 'Extpose' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevExtposeApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "User",
					"value": "User",
					"description": "user-specific methods"
				}
			],
			"default": ""
		},
		...userDescription
                ],
        };
}
