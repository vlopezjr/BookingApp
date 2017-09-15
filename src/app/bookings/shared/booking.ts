import { Note } from './note';

export class Booking {
    key: number;
    promoterName: string;
    promoterNumber: string;
    promoterEmail: string;
    eventDate: string;   
    eventTime: string;
    eventType: string; 
    venueName: string;
    venueAddress: string;
    venueCity: string;
    venueState: string;
    venueCountry: string;
    venueWebsite: string;
    venueAgeRestriction: string;
    numberTravelling: number;
    namesTravelling: string;
    includeDancers: boolean;
    includeMerchBooth: boolean;
    specialInstructions: string;
    createdDate: Date;
    createdUserName: string;
    updatedDate: Date;
    updatedUserName: string;
    notes: Note[];
    isFunded: boolean;
    eventQuotedAmount: number;
    eventFinalAmount: number;
}
