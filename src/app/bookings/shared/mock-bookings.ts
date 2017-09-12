import { Booking } from './booking';
import { Note } from './note';

export const BOOKINGS: Booking[] = [
    {
        key: 1, promoterName: 'Balmore Sanchez', promoterNumber: '6265551212', promoterEmail: 'promoter@gmail.com', eventDate: new Date(2017, 9, 1), eventType: 'Festival',
        venueName: 'House of Blues', venueAddress: '1234 Hollywood Blvd', venueCity: 'Hollywood', venueState: 'CA', venueCountry: 'USA', venueWebsite: 'www.houseofblues.com',
        numberTravelling: 2, namesTravelling: 'Victor Lopez Jr, Juan Lopez', includeDancers: false, includeMerchBooth: true, specialInstructions: 'Add Don Miguel to play list',
        createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo', isFunded: false, eventQuotedAmount: 1500, eventFinalAmount: 1500,
        notes: [
            { key: 1, bookingKey: 1, textValue: 'note1-1', createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo' },
            { key: 2, bookingKey: 1, textValue: 'note1-2', createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo' }
        ]
        
    },
    {
        key: 2, promoterName: 'Balmore Sanchez', promoterNumber: '6265551212', promoterEmail: 'promoter@gmail.com', eventDate: new Date(2017, 10, 1), eventType: 'Club',
        venueName: 'House of Blues', venueAddress: '5678 Anaheim Blvd', venueCity: 'Santa Ana', venueState: 'CA', venueCountry: 'USA', venueWebsite: 'www.houseofblues.com',
        numberTravelling: 2, namesTravelling: 'Victor Lopez Jr, Juan Lopez', includeDancers: false, includeMerchBooth: true, specialInstructions: '5 songs only',
        createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo', isFunded: true, eventQuotedAmount: 2500, eventFinalAmount: 2500,
        notes: [
            { key: 2, bookingKey: 2, textValue: 'note2-1', createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo' }
        ]
    },
    {
        key: 3, promoterName: 'Balmore Sanchez', promoterNumber: '6265551212', promoterEmail: 'promoter@gmail.com', eventDate: new Date(2017, 11, 1), eventType: 'Private',
        venueName: 'House of Blues', venueAddress: '9012 Long Beach Blvd', venueCity: 'Long Beach', venueState: 'CA', venueCountry: 'USA', venueWebsite: 'www.houseofblues.com',
        numberTravelling: 2, namesTravelling: 'Victor Lopez Jr, Juan Lopez', includeDancers: false, includeMerchBooth: true, specialInstructions: 'Make sure you mention promoter',
        createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo', isFunded: false, eventQuotedAmount: 1800, eventFinalAmount: 1800,
        notes: [
            { key: 3, bookingKey: 3, textValue: 'note3-1', createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo' }
        ]
    }
]; 