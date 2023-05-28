import { Business } from "./business";

/*
    Typescript interface creating an interface for an array of 'Business' interfaces. This will be used to generate lists of businesses that share a template.
*/

export interface BusinessListItem {
    BusinessList: Business[]
}

export interface BusinessList {         
    BusinessList: BusinessListItem[]
}