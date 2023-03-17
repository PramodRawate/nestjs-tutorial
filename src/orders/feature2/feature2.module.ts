import { Module } from '@nestjs/common';

@Module({})
export class Feature2Module {
    constructor() {
        console.log('Feature module-2 integrated...');
    }
}
