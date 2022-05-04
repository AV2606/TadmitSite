export enum Languages{
    hebrew='hebrew',
    english='english'
}
export class Strings{

    //should be used later to change language.
    static language=Languages.english;
    static readonly notSupportedYetChar='<>';

    static readonly first_name= 'Avichay';//this.language==Languages.english? 'Avichay':this.notSupportedYetChar;
    static readonly last_name='Vaknin';
    static readonly shortDesc=`<strong>The program magician.</br>Full-stack.</strong>`;
}