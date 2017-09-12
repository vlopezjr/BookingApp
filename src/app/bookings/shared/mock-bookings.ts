import { Booking } from './booking';
import { Note } from './note';

export const BOOKINGS: Booking[] = [
    {
        key: 1, promoterName: 'John Pena', promoterNumber: '6265551212', promoterEmail: 'promoter1@gmail.com', eventDate: new Date(2017, 9, 1), eventType: 'Festival',
        venueName: 'House of Blues #1', venueAddress: '1234 Hollywood Blvd', venueCity: 'Hollywood', venueState: 'CA', venueCountry: 'USA', venueWebsite: 'www.houseofblues.com',
        numberTravelling: 2, namesTravelling: 'Victor Lopez Jr, Juan Lopez', includeDancers: false, includeMerchBooth: true, specialInstructions: 'Add Don Miguel to play list',
        createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo', isFunded: false, eventQuotedAmount: 1500, eventFinalAmount: 1500,
        notes: [
            { key: 1, bookingKey: 1, textValue: 'note1-1', createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo' },
            { key: 2, bookingKey: 1, textValue: 'note1-2', createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo' }
        ]
        
    },
    {
        key: 2, promoterName: 'Elias Rivera', promoterNumber: '6265552222', promoterEmail: 'promoter2@gmail.com', eventDate: new Date(2017, 10, 1), eventType: 'Club',
        venueName: 'House of Blues #2', venueAddress: '5678 Anaheim Blvd', venueCity: 'Santa Ana', venueState: 'CA', venueCountry: 'USA', venueWebsite: 'www.houseofblues.com',
        numberTravelling: 2, namesTravelling: 'Victor Lopez Jr, Juan Lopez', includeDancers: false, includeMerchBooth: true, specialInstructions: '5 songs only',
        createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo', isFunded: true, eventQuotedAmount: 2500, eventFinalAmount: 2500,
        notes: [
            { key: 3, bookingKey: 2, textValue: 'note2-1', createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo' }
        ]
    },
    {
        key: 3, promoterName: 'Tony Villatoro', promoterNumber: '6265553333', promoterEmail: 'promoter3@gmail.com', eventDate: new Date(2017, 11, 1), eventType: 'Private',
        venueName: 'House of Blues #3', venueAddress: '9012 Long Beach Blvd', venueCity: 'Long Beach', venueState: 'CA', venueCountry: 'USA', venueWebsite: 'www.houseofblues.com',
        numberTravelling: 2, namesTravelling: 'Victor Lopez Jr, Juan Lopez', includeDancers: false, includeMerchBooth: true, specialInstructions: 'Make sure you mention promoter',
        createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo', isFunded: false, eventQuotedAmount: 1800, eventFinalAmount: 1800,
        notes: [
            { key: 4, bookingKey: 3, textValue: 'note3-1', createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo' }
        ]
    },
    {
        key: 4, promoterName: 'Toni Ayala', promoterNumber: '6265554444', promoterEmail: 'promoter4@gmail.com', eventDate: new Date(2017, 12, 1), eventType: 'Private',
        venueName: 'House of Blues #4', venueAddress: '9012 Long Beach Blvd', venueCity: 'Long Beach', venueState: 'CA', venueCountry: 'USA', venueWebsite: 'www.houseofblues.com',
        numberTravelling: 2, namesTravelling: 'Victor Lopez Jr, Juan Lopez', includeDancers: false, includeMerchBooth: true, specialInstructions: 'Make sure you mention promoter',
        createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo', isFunded: false, eventQuotedAmount: 1800, eventFinalAmount: 1800,
        notes: [
            { key: 5, bookingKey: 4, textValue: 'note4-1', createdDate: new Date(), createdUserName: 'jsotelo', updatedDate: new Date(), updatedUserName: 'jsotelo' }
        ]
    }
]; 