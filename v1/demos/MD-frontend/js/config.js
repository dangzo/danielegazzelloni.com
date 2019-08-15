/* 
 * Provides editables for the webapp.
 * 
 * MD-frontend project - config.js
 * @author Daniele Gazzelloni <daniele@danielegazzelloni.com>
 */


/******************************************************
 *               EDITABLES: API settings 
 *******************************************************/

var defaultPage = {
    url: "md-pages/default.md"
};

var MDPages = [
    // FIRST HEADING
    {
        name: "Introduction",
        pages: [
            // PAGES
            {
                name: "Introduction",
                url: "md-pages/1-Introduction/Introduction.md"
            }
        ]
    },
    // SECOND HEADING
    {
        name: "Libraries and Wrappers",
        pages: [
            // PAGES
            {
                name: "ASP.NET support",
                url: "md-pages/2-Libraries and Wrappers/A-asp.net support.md"
            },
            {
                name: "Post ASP.NET webpage",
                url: "md-pages/2-Libraries and Wrappers/B-post asp.net webpage.md"
            },
            {
                name: "PHP support",
                url: "md-pages/2-Libraries and Wrappers/C-PHP support.md"
            }
        ]
    },
    // THIRD HEADING
    {
        name: "API Methods",
        subheadings: [
            {
                name: "Account",
                pages: [
                    // PAGES
                    {
                        name: "getcredits",
                        url: "md-pages/3-API Methods/Account/getcredits.md"
                    },
                    {
                        name: "getlanguages",
                        url: "md-pages/3-API Methods/Account/getlanguages.md"
                    },
                    {
                        name: "removesubscriber",
                        url: "md-pages/3-API Methods/Account/removesubscriber.md"
                    },
                    {
                        name: "removesubscriberbyaddress",
                        url: "md-pages/3-API Methods/Account/removesubscriberbyaddress.md"
                    },
                    {
                        name: "removesubscriberbymobile",
                        url: "md-pages/3-API Methods/Account/removesubscriberbymobile.md"
                    },
                    {
                        name: "savesubscriberprofile",
                        url: "md-pages/3-API Methods/Account/savesubscriberprofile.md"
                    },
                    {
                        name: "updatesubscriberstatus",
                        url: "md-pages/3-API Methods/Account/updatesubscriberstatus.md"
                    },
                    {
                        name: "whatismyaccountid",
                        url: "md-pages/3-API Methods/Account/whatismyaccountid.md"
                    },
                    {
                        name: "whatismysiteid",
                        url: "md-pages/3-API Methods/Account/whatismysiteid.md"
                    }
                ]
            },
            {
                name: "API Returns",
                pages: [
                    // PAGES
                    {
                        name: "API Returns",
                        url: "md-pages/3-API Methods/API Returns/feedbackDTO-object.md"
                    }
                ]
            },
            {
                name: "Autoresponders",
                pages: [
                    // PAGES
                    {
                        name: "getautoresponder",
                        url: "md-pages/3-API Methods/Autoresponders/getautoresponder.md"
                    },
                    {
                        name: "getautoresponders",
                        url: "md-pages/3-API Methods/Autoresponders/getautoresponders.md"
                    },
                    {
                        name: "getcampaignorderedby",
                        url: "md-pages/3-API Methods/Autoresponders/getcampaignorderedby.md"
                    },
                    {
                        name: "linksubscribertoautotrigger",
                        url: "md-pages/3-API Methods/Autoresponders/linksubscribertoautotrigger.md"
                    },
                    {
                        name: "sendtriggeredautoresponder",
                        url: "md-pages/3-API Methods/Autoresponders/sendtriggeredautoresponder.md"
                    },
                    {
                        name: "unlinksubscribertoautotrigger",
                        url: "md-pages/3-API Methods/Autoresponders/unlinksubscribertoautotrigger.md"
                    }

                ]
            },
            {
                name: "Bounces & Unsubscribes",
                pages: [
                    // PAGES
                    {
                        name: "getbounces",
                        url: "md-pages/3-API Methods/Bounces & Unsubscribes/getbounces.md"
                    },
                    {
                        name: "getcampaignunsubscribes",
                        url: "md-pages/3-API Methods/Bounces & Unsubscribes/getcampaignunsubscribes.md"
                    },
                    {
                        name: "gethardbounces",
                        url: "md-pages/3-API Methods/Bounces & Unsubscribes/gethardbounces.md"
                    },
                    {
                        name: "getsoftbounces",
                        url: "md-pages/3-API Methods/Bounces & Unsubscribes/getsoftbounces.md"
                    },
                    {
                        name: "listunsubscribe",
                        url: "md-pages/3-API Methods/Bounces & Unsubscribes/listunsubscribe.md"
                    },
                    {
                        name: "listunsubscribebyid",
                        url: "md-pages/3-API Methods/Bounces & Unsubscribes/listunsubscribebyid.md"
                    },
                    {
                        name: "listunsubscribemobile",
                        url: "md-pages/3-API Methods/Bounces & Unsubscribes/listunsubscribemobile.md"
                    }
                ]
            },
            {
                name: "Campaigns",
                pages: [
                    // PAGES
                    {
                        name: "addcampaigndata",
                        url: "md-pages/3-API Methods/Campaigns/addcampaigndata.md"
                    },
                    {
                        name: "getcampaign",
                        url: "md-pages/3-API Methods/Campaigns/getcampaign.md"
                    },
                    {
                        name: "getcampaigndata",
                        url: "md-pages/3-API Methods/Campaigns/getcampaigndata.md"
                    },
                    {
                        name: "getcampaigns",
                        url: "md-pages/3-API Methods/Campaigns/getcampaigns.md"
                    },
                    {
                        name: "getcampaignsinstatus",
                        url: "md-pages/3-API Methods/Campaigns/getcampaignsinstatus.md"
                    },
                    {
                        name: "getcampaignstatistics",
                        url: "md-pages/3-API Methods/Campaigns/getcampaignstatistics.md"
                    },
                    {
                        name: "schedulecampaign",
                        url: "md-pages/3-API Methods/Campaigns/schedulecampaign.md"
                    },
                    {
                        name: "sendcampaignnow",
                        url: "md-pages/3-API Methods/Campaigns/sendcampaignnow.md"
                    },
                    {
                        name: "unschedulecampaign",
                        url: "md-pages/3-API Methods/Campaigns/unschedulecampaign.md"
                    },
                    {
                        name: "updatecampaigndata",
                        url: "md-pages/3-API Methods/Campaigns/updatecampaigndata.md"
                    }
                ]
            },
            {
                name: "Email Addresses",
                pages: [
                    // PAGES
                    {
                        name: "addsubscribegroup",
                        url: "md-pages/3-API Methods/Email Addresses/addsubscribegroup.md"
                    },
                    {
                        name: "addsubscriber",
                        url: "md-pages/3-API Methods/Email Addresses/addsubscriber.md"
                    },
                    {
                        name: "getsubscribegroup",
                        url: "md-pages/3-API Methods/Email Addresses/getsubscribegroup.md"
                    },
                    {
                        name: "getsubscribegroups",
                        url: "md-pages/3-API Methods/Email Addresses/getsubscribegroups.md"
                    },
                    {
                        name: "getsubscriber",
                        url: "md-pages/3-API Methods/Email Addresses/getsubscriber.md"
                    },
                    {
                        name: "getsubscriberbyaddress",
                        url: "md-pages/3-API Methods/Email Addresses/getsubscriberbyaddress.md"
                    },
                    {
                        name: "getsubscriberprofile",
                        url: "md-pages/3-API Methods/Email Addresses/getsubscriberprofile.md"
                    },
                    {
                        name: "getsubscriberprofilebyaddress",
                        url: "md-pages/3-API Methods/Email Addresses/getsubscriberprofilebyaddress.md"
                    },
                    {
                        name: "getsubscribers",
                        url: "md-pages/3-API Methods/Email Addresses/getsubscribers.md"
                    },
                    {
                        name: "getsubscribersinstatus",
                        url: "md-pages/3-API Methods/Email Addresses/getsubscribersinstatus.md"
                    },
                    {
                        name: "removesubscribegroup",
                        url: "md-pages/3-API Methods/Email Addresses/removesubscribegroup.md"
                    },
                    {
                        name: "savecustomfielddata",
                        url: "md-pages/3-API Methods/Email Addresses/savecustomfielddata.md"
                    },
                    {
                        name: "updateemailsubscriber",
                        url: "md-pages/3-API Methods/Email Addresses/updateemailsubscriber.md"
                    }
                ]
            },
            {
                name: "Sessions",
                pages: [
                    // PAGES
                    {
                        name: "createsession-api",
                        url: "md-pages/3-API Methods/Sessions/createsession-api.md"
                    },
                    {
                        name: "endsession-api",
                        url: "md-pages/3-API Methods/Sessions/endsession-api.md"
                    }
                ]
            },
            {
                name: "SMS",
                pages: [
                    // PAGES
                    {
                        name: "sendsms",
                        url: "md-pages/3-API Methods/SMS/sendsms.md"
                    }
                ]
            },
            {
                name: "Statistics",
                pages: [
                    // PAGES
                    {
                        name: "gettrackinglink",
                        url: "md-pages/3-API Methods/Statistics/gettrackinglink.md"
                    },
                    {
                        name: "gettrackinglinks",
                        url: "md-pages/3-API Methods/Statistics/gettrackinglinks.md"
                    }
                ]
            },
            {
                name: "Templates",
                pages: [
                    // PAGES
                    {
                        name: "gettemplate",
                        url: "md-pages/3-API Methods/Templates/gettemplate.md"
                    },
                    {
                        name: "gettemplates",
                        url: "md-pages/3-API Methods/Templates/gettemplates.md"
                    }
                ]
            },
            {
                name: "Users",
                pages: [
                    // PAGES
                    {
                        name: "adduser",
                        url: "md-pages/3-API Methods/Users/adduser.md"
                    },
                    {
                        name: "getuser",
                        url: "md-pages/3-API Methods/Users/getuser.md"
                    },
                    {
                        name: "getuserbyname",
                        url: "md-pages/3-API Methods/Users/getuserbyname.md"
                    },
                    {
                        name: "getusers",
                        url: "md-pages/3-API Methods/Users/getusers.md"
                    }
                ]
            }
        ]
    },
    // FINAL HEADING
    {
        name: "Revision History",
        pages: [
            // PAGES
            {
                name: "Revision History",
                url: "md-pages/4-Revision History/revision-history.md"
            }
        ]
    }
];
/******************************************************
 *                   STOP EDITABLES
 *******************************************************/
