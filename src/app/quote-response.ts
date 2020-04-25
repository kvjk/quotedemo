export interface QuoteResponse {
  _embedded: {
    quotes: Quotes[];
  }
}

export interface Quotes {
  text?: string,
  withOut3N5?: string,
  nounsCount?: string,
  verbsCount?: string,
  periodsCount?: string,
  youCount?: string,
  thatCount?: string,
  thingCount?: string,
  theyCount?: string,
  _links?: {
    self?: {
      href?: string
    },
    quote?: {
      href?: string
    }
  }


}
