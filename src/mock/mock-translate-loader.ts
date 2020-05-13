import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

const translations: any = {
    CARDS_TITLE: 'This is a test',
    'common.button.cancel': 'Cancel'
};

export class MockTranslateLoader implements TranslateLoader {

    getTranslation(lang: string): Observable<any> {
      return of(translations);
    }
}