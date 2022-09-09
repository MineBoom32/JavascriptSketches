var currentInstrument = 0;
const synth = new Tone.Synth().toDestination();

class instrument {
    family
    loudness
    verb

    constructor(loudness, family, verb){
        this.family = family;
        this.loudness = loudness;
        this.verb = verb;
    }

    playNote(){
        synth.volume.value = 10 * this.loudness;
        synth.triggerAttackRelease("B4", .5);
        console.log(this.family + " " + this.verb + " at " +  this.loudness + " loudness");
    }
}

class woodwind extends instrument{
    constructor(loudness){
        super(loudness, "woodwind", "toot");
    }
}
class percussion extends instrument{
    constructor(loudness){
        super(loudness, "percussion", "tap");
    }
}
class string extends instrument{
    constructor(loudness){
        super(loudness, "string", "hum?");
    }
}

let synthApp = {
    instruments: [
        new woodwind(0.7),
        new percussion(0.2),
        new string(0.5)
    ],
    nextNote(){
        if (currentInstrument >= 2) {
            currentInstrument = 0;
        } else {
            currentInstrument++;
        }
        console.log(currentInstrument);
        this.instruments[currentInstrument].playNote();
        setTimeout(this.nextNote.bind(this), 500);
    },

    // Had to add in this starting function from a Github issue post due to Javascript being Javascript
    startNotes(){
        if (Tone.context.state != "running") {
            Tone.context.resume();
        }
        this.nextNote();
    }
}
