import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export interface MessagesList {
    id: number;
    userName: string;
    userEmail: string;
    message: {
        registryDateTime?: string;
        messageSubject?: string;
        messageText?: string;
        messageTitle?: string;
    };
}
