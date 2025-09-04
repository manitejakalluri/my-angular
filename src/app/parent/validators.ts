import { AbstractControl } from "@angular/forms";

export function applemail(control:AbstractControl){
    if (control.value.includes('@apple.com')) {
        return null;
    } else {
        return{'applemail': 'please use apple mail only'}
    }
}