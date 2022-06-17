import { HttpClient, HttpContext } from '@angular/common/http';

export interface IContact{
    formProperties:IFormProperties,
    emailConfig:IEmailConfig,
    viewMode:string,
    fields:any[],
    labelKeys:string[]
}

export interface IFormProperties{
    formName:string,
    formId:string
}

export interface IEmailConfig{
    sendToOwnerAndEmails:ISendMails;
}

export interface ISendMails{
    emailIds:[]
}

export class ContactRequest implements IContact{
    formProperties:IFormProperties;
    emailConfig:IEmailConfig
    viewMode: string
    fields:any[]
    labelKeys: string[]


    constructor(){
        this.formProperties={
            formName:'',
            formId:''
        };
        this.emailConfig={
            sendToOwnerAndEmails:{
                emailIds:[]
            }
        };
        this.viewMode='Preview';
        this.fields=[];
        this.labelKeys=[];
    }

    public static GenerateContactRequest():ContactRequest{
        let r = new ContactRequest();
        r.formProperties={
            formName:'Contact',
            formId:'comp-l41atzwc'
        };
        r.labelKeys=["custom.contact"];
        return r;
    }

    public AddFirstNameField(name:string){
        let obj=this.fields.find(f=>{
            let fany=f as any;
            return fany.label=="Name";
        });
        if(obj != null)
            return;
        let f={
            fieldId:"comp-l41atzwi",
            label:"Name",
            firstName:{
                value:name
            }
        };
        this.fields.push(f);
    }
    public AddEmailField(mail:string){
        let obj=this.fields.find(f=>{
            let fany=f as any;
            return fany.label=="Email";
        });
        if(obj != null)
            return;
        let f={
            fieldId:"comp-l41atzwu",
            label:"Email",
            email:{
                value:mail,
                tag:"main"
            }
        };
        this.fields.push(f);
    }
    public AddPhoneField(phone:string){
        let obj=this.fields.find(f=>{
            let fany=f as any;
            return fany.label=="Phone";
        });
        if(obj != null)
            return;
        let f={
            fieldId:"comp-l41atzwx1",
            label:"Phone",
            phone:{
                value:phone,
                tag:"other"
            }
        };
        this.fields.push(f);
    }
    public AddAddressField(address:string){
        let obj=this.fields.find(f=>{
            let fany=f as any;
            return fany.label=="Address";
        });
        if(obj != null)
            return;
        let f={
            fieldId:"comp-l41atzx2",
            label:"Address",
            address:{
                value:address,
                tag:"other"
            }
        };
        this.fields.push(f);
    }
    public AddSubjectField(subject:string){
        let obj=this.fields.find(f=>{
            let fany=f as any;
            return fany.label=="Subject";
        });
        if(obj != null)
            return;
        let f={
            fieldId:"comp-l41atzx42",
            label:"Subject",
            extended:{
                value:{
                    string:""
                },
                key:"custom.subject"
            }
        };
        this.fields.push(f);
    }
    public AddMessageField(message:string){
        let obj=this.fields.find(f=>{
            let fany=f as any;
            return fany.label=="Message";
        });
        if(obj != null)
            return;
        let f={
            fieldId:"comp-l41atzx71",
            label:"Message",
            extended:{
                value:{
                    string:""
                },
                key:"custom.message"
            }
        };
        this.fields.push(f);
    }
    public async Send(client:HttpClient){
        let url="https://avichay593.wixsite.com/_api/wix-forms/v1/submit-form";
        let r=null;
        await client.post(url,this,{
            headers:{
            'Content-Type':'application/json',
            'Authorization':'HuYd15ugsn-JdZX0_C_bF-WcHjj4FrghHLCTOggghYA.eyJpbnN0YW5jZUlkIjoiOGZmMmQ5ZjktZDdlNy00NjY3LWE4MTUtYTg4NzVkZDhkYjYwIiwiYXBwRGVmSWQiOiIxNGNlMTIxNC1iMjc4LWE3ZTQtMTM3My0wMGNlYmQxYmVmN2MiLCJtZXRhU2l0ZUlkIjoiMDdkNTY3NWQtNDk4ZC00YTUwLTliZjctOGVkM2UwOTI0MzNlIiwic2lnbkRhdGUiOiIyMDIyLTA2LTE3VDE0OjUyOjI0LjQwOVoiLCJ1aWQiOiI2MGYwMTVlNi1hNTczLTRiMzYtODZkZi0zMDYxZDIxMzZjNmEiLCJwZXJtaXNzaW9ucyI6Ik9XTkVSIiwiZGVtb01vZGUiOmZhbHNlLCJiaVRva2VuIjoiODgyN2JlYTQtOWU2YS0wYzM3LTMzZTItMjY1NGJkNGE5ODVlIiwic2l0ZU93bmVySWQiOiI2MGYwMTVlNi1hNTczLTRiMzYtODZkZi0zMDYxZDIxMzZjNmEiLCJzaXRlTWVtYmVySWQiOiI2MGYwMTVlNi1hNTczLTRiMzYtODZkZi0zMDYxZDIxMzZjNmEiLCJleHBpcmF0aW9uRGF0ZSI6IjIwMjItMDYtMTdUMTg6NTI6MjQuNDA5WiIsImxvZ2luQWNjb3VudElkIjoiNjBmMDE1ZTYtYTU3My00YjM2LTg2ZGYtMzA2MWQyMTM2YzZhIn0',
            // 'DNT':'1',
            // 'Referer':'https://editor.wix.com/',
            'X-Wix-Client-Artifact-Id':'wix-form-builder'
            },
            withCredentials:true

        }).subscribe((res)=>{
         r=res
        }
        );
        return r;

    }

}