import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ConvertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string, changeTo: string) {
        var finalString = "";
        for(var char of value)
        {
            if(char == '-')
                finalString = finalString+changeTo;
            else
                finalString = finalString+char;
        }
        return finalString;
        //return value.replace(character, ' ');
    }
}