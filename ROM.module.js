export class ROMModule {

    constructor(){
        this.frames = [];
        this.maxFrames = 999;
    }

    store(frame){
        if(this.frames.length >= this.maxFrames){
            this.frames.shift();
        }
        this.frames.push(frame);
        return this.snapshot();
    }

    snapshot(){
        return {
            count: this.frames.length,
            last: this.frames[this.frames.length - 1] || null
        };
    }
}
