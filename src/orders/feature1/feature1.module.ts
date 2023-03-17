import { Module } from '@nestjs/common';

@Module({})
export class Feature1Module {
    constructor() {
        console.log('Feature module-1 integrated...');
    }
}
