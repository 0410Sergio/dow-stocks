export class Stock {
  constructor(
    public date: Date,
    public price?: number,
    public change?: number,
    public changePercent?: number,

  ) { }
}

export class NewsData {
  constructor(
    public title: string,
    public image?: string,
    public site?: string,
    public text?: string,
    public url?: string

  ) { }
}
