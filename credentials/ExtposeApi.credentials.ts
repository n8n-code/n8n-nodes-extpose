import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ExtposeApi implements ICredentialType {
        name = 'N8nDevExtposeApi';

        displayName = 'Extpose API';

        icon: Icon = { light: 'file:../nodes/Extpose/extpose.svg', dark: 'file:../nodes/Extpose/extpose.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://extpose.com/api/v1',
                        required: true,
                        placeholder: 'https://extpose.com/api/v1',
                        description: 'The base URL of your Extpose API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
