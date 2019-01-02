export class Painting {
    public name: string;
    public authorName: string;
    public id: string;
    public imagePath: string;
    public desc: string;
    public ethTransactionId: string;

    constructor(name: string, authorName: string, id: string, imagePath: string, desc: string, eth: string) {
        this.name =  name;
        this.authorName = authorName;
        this.id = id;
        this.imagePath = imagePath;
        this.desc = desc;
        this.ethTransactionId = eth;
    }
}
