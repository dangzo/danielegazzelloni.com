/* 
 * Provides services to the app.
 * 
 * 
 * MD-frontend project - services.js
 * @author Daniele Gazzelloni <daniele@danielegazzelloni.com>
 */

/*
MDapp.service("db", function ($http) {
        
        this.getEvents = function () {            
            var promise = $http.get(getEvents_API)
                .success (function(data, status, headers, config) {
                    return data;
                })
                .error (function(data, status, headers, config) {
                    return data;
                });
                
            return promise;
        };
        
        this.getPersons = function () {            
            var promise = $http.get(getPersons_API)
                .success (function(data, status, headers, config) {
                    return data;
                })
                .error (function(data, status, headers, config) {
                    return data;
                });
                
            return promise;
        };
        
        this.insertPerson = function (personFirstName, personLastName, personEmail, personAge, personGender, personYob, personLocation, personPets, personSoulmateYobStart, personSoulmateYobEnd) {
            var data = {
                firstname: personFirstName,
                lastname: personLastName,
                email: personEmail,
                age: personAge,
                gender: personGender,
                yob: personYob,
                location: personLocation,
                pets: personPets,
                soulmateYobStart: personSoulmateYobStart,
                soulmateYobEnd: personSoulmateYobEnd
            };
            
            var promise = $http.post(insertPerson_API, data)
                .success (function(data, status, headers, config) {
                    return data.result;
                })
                .error (function(data, status, headers, config) {
                    return data.result;
                });
                
            return promise;
        };
        
        this.deletePerson = function (personObjId) {
            var data = {
                objId: personObjId
            };
            
            var promise = $http.post(deletePerson_API, data)
                .success (function(data, status, headers, config) {
                    return data.result;
                })
                .error (function(data, status, headers, config) {
                    return data.result;
                });
                
            return promise;
        };
        
        this.prepareEvent = function (eventName, eventSize) {
            var data = {
                name: eventName,
                size: eventSize
            };
            
            var promise = $http.post(prepareEvent_API, data)
                .success (function(data, status, headers, config) {
                    return data.result;
                })
                .error (function(data, status, headers, config) {
                    return data.result;
                });
                
            return promise;
        };
        
        this.createEvent = function (eventName, eventSize, eventMen, eventWomen, eventNote) {
            var data = {
                name: eventName,
                size: eventSize,
                men: eventMen,
                women: eventWomen,
                note: eventNote
            };
            
            var promise = $http.post(createEvent_API, data)
                .success (function(data, status, headers, config) {
                    return data.result;
                })
                .error (function(data, status, headers, config) {
                    return data.result;
                });
                
            return promise;
        };
});
*/