import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "Get User Extensions",
					"value": "Get User Extensions",
					"action": "Get User Extensions",
					"description": "This endpoint allows you to get list of your extensions including extensions from the watchlist.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user-extensions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /user-extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Extensions"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "API key for api_key (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Extensions"
					]
				}
			}
		},
];
