window.TIMELINE_DATA = {
  "gallery": {
    "title": "Who owned it, and when",
    "subtitle": "Five years of beneficial-ownership change for UK companies, reconstructed from Companies House PSC data and mapped to the Beneficial Ownership Data Standard (BODS v0.4).",
    "companies": [
      {
        "number": "02536231",
        "name": "Chelsea FC Holdings Limited",
        "hook": "A sanctions-forced sale, and a holding company that existed for six weeks",
        "stats": {
          "chain_depth": 2,
          "entities": 5,
          "people": 3,
          "foreign": 0,
          "gaps": 0,
          "bods_statements": 29,
          "comparison": "Reaching the ultimate owner means walking 2 layer(s) up the chain through 5 companies \u2014 each its own PSC page and filing history on Companies House. Here it is one timeline."
        },
        "window": {
          "start": "2016-04-06",
          "end": "2026-06-19"
        },
        "ultimate_today": [
          {
            "name": "Mr Behdad Eghbali",
            "kind": "person",
            "jurisdiction": null
          },
          {
            "name": "Mr Jose E. Feliciano",
            "kind": "person",
            "jurisdiction": null
          },
          {
            "name": "Todd Lawrence Boehly",
            "kind": "person",
            "jurisdiction": null
          }
        ]
      },
      {
        "number": "02529667",
        "name": "Newcastle United Limited",
        "hook": "From Mike Ashley to a Saudi sovereign-wealth consortium \u2014 and an early gap in the record",
        "stats": {
          "chain_depth": 2,
          "entities": 3,
          "people": 0,
          "foreign": 1,
          "gaps": 0,
          "bods_statements": 14,
          "comparison": "Reaching the ultimate owner means walking 2 layer(s) up the chain through 3 companies \u2014 each its own PSC page and filing history on Companies House. Here it is one timeline."
        },
        "window": {
          "start": "2016-07-31",
          "end": "2026-06-19"
        },
        "ultimate_today": [
          {
            "name": "Public Investment Fund",
            "kind": "foreign",
            "jurisdiction": "Saudi Arabia"
          }
        ]
      },
      {
        "number": "00036624",
        "name": "Everton Football Club Company, Limited",
        "hook": "A named individual owner, resident offshore, replaced after eight years",
        "stats": {
          "chain_depth": 1,
          "entities": 2,
          "people": 1,
          "foreign": 0,
          "gaps": 0,
          "bods_statements": 8,
          "comparison": "Reaching the ultimate owner means walking 1 layer(s) up the chain through 2 companies \u2014 each its own PSC page and filing history on Companies House. Here it is one timeline."
        },
        "window": {
          "start": "2016-04-06",
          "end": "2026-06-19"
        },
        "ultimate_today": [
          {
            "name": "Mr Thomas Dan Friedkin",
            "kind": "person",
            "jurisdiction": null
          }
        ]
      },
      {
        "number": "05819262",
        "name": "Kemble Water Holdings Limited",
        "hook": "The anti-timeline: the ultimate UK parent of Thames Water reports no owner at all",
        "stats": {
          "chain_depth": 0,
          "entities": 1,
          "people": 0,
          "foreign": 0,
          "gaps": 1,
          "bods_statements": 2,
          "comparison": "Reaching the ultimate owner means walking 0 layer(s) up the chain through 1 company \u2014 each its own PSC page and filing history on Companies House. Here it is one timeline."
        },
        "window": {
          "start": "2017-06-01",
          "end": "2026-06-19"
        },
        "ultimate_today": [
          {
            "name": "No registrable person",
            "kind": "gap",
            "jurisdiction": null
          }
        ]
      }
    ]
  },
  "companies": {
    "02536231": {
      "company": {
        "number": "02536231",
        "name": "CHELSEA FC HOLDINGS LIMITED",
        "display_name": "Chelsea FC Holdings Limited",
        "hook": "A sanctions-forced sale, and a holding company that existed for six weeks",
        "blurb": "Roman Abramovich's Fordstam Limited controlled Chelsea for six years. After Abramovich was sanctioned in March 2022, the club passed through an interim vehicle \u2014 Blueco 22 Limited, a beneficial owner for just 43 days \u2014 before landing with the Boehly\u2013Clearlake structure. The interim owner is invisible on the live register; only the history shows it.",
        "ch_url": "https://find-and-update.company-information.service.gov.uk/company/02536231/persons-with-significant-control"
      },
      "window": {
        "start": "2016-04-06",
        "end": "2026-06-19"
      },
      "root": "02536231",
      "entities": [
        {
          "number": "02536231",
          "name": "CHELSEA FC HOLDINGS LIMITED",
          "level": 0,
          "kind": "root",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/02536231/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "Blueco 22 Midco Limited",
              "owner_kind": "entity",
              "owner_number": "14213798",
              "owner_id": "14213798",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "Boehly / Clearlake Capital structure",
              "start": "2022-07-12",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2022-07-12",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            },
            {
              "owner_name": "Blueco 22 Limited",
              "owner_kind": "entity",
              "owner_number": "13949552",
              "owner_id": "13949552",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "Boehly / Clearlake acquisition vehicle",
              "start": "2022-05-30",
              "end": "2022-07-12",
              "active": false,
              "natures": [
                "Shares: 75%+"
              ],
              "events": [
                {
                  "date": "2022-05-30",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2022-07-12",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            },
            {
              "owner_name": "Fordstam Limited",
              "owner_kind": "entity",
              "owner_number": "04784127",
              "owner_id": "04784127",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "Roman Abramovich's holding company",
              "start": "2016-04-06",
              "end": "2022-05-30",
              "active": false,
              "natures": [
                "Shares: 75%+"
              ],
              "events": [
                {
                  "date": "2016-04-06",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2022-05-30",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            }
          ],
          "gaps": []
        },
        {
          "number": "14213798",
          "name": "BLUECO 22 MIDCO LIMITED",
          "level": 1,
          "kind": "entity",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/14213798/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "Blueco 22 Limited",
              "owner_kind": "entity",
              "owner_number": "13949552",
              "owner_id": "13949552",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "Boehly / Clearlake acquisition vehicle",
              "start": "2022-07-04",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2022-07-04",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            }
          ],
          "gaps": []
        },
        {
          "number": "13949552",
          "name": "BLUECO 22 LIMITED",
          "level": 1,
          "kind": "entity",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/13949552/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "22 Holdco Limited",
              "owner_kind": "entity",
              "owner_number": "14075518",
              "owner_id": "14075518",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "Clearlake & Boehly holding company",
              "start": "2022-04-29",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2022-04-29",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            },
            {
              "owner_name": "Todd Lawrence Boehly",
              "owner_kind": "person",
              "owner_number": null,
              "owner_id": "person:todd lawrence boehly",
              "owner_jurisdiction": null,
              "person": {
                "dob": "1973-09",
                "nationality": "American",
                "residence": "United States"
              },
              "subtitle": "",
              "start": "2022-04-27",
              "end": "2022-04-29",
              "active": false,
              "natures": [
                "Shares: 75%+"
              ],
              "events": [
                {
                  "date": "2022-04-27",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2022-04-29",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            },
            {
              "owner_name": "Jonathan Goldstein",
              "owner_kind": "person",
              "owner_number": null,
              "owner_id": "person:jonathan goldstein",
              "owner_jurisdiction": null,
              "person": {
                "dob": "1966-03",
                "nationality": "British",
                "residence": "United Kingdom"
              },
              "subtitle": "",
              "start": "2022-03-02",
              "end": "2022-04-27",
              "active": false,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+"
              ],
              "events": [
                {
                  "date": "2022-03-02",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2022-04-27",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            }
          ],
          "gaps": []
        },
        {
          "number": "04784127",
          "name": "FORDSTAM LIMITED",
          "level": 1,
          "kind": "entity",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/04784127/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "Mr Roman Abramovich",
              "owner_kind": "person",
              "owner_number": null,
              "owner_id": "person:mr roman abramovich",
              "owner_jurisdiction": null,
              "person": {
                "dob": "1966-10",
                "nationality": "Russian",
                "residence": "Russia"
              },
              "subtitle": "",
              "start": "2016-04-06",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 75%+"
              ],
              "events": [
                {
                  "date": "2016-04-06",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            }
          ],
          "gaps": []
        },
        {
          "number": "14075518",
          "name": "22 HOLDCO LIMITED",
          "level": 2,
          "kind": "entity",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/14075518/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "Mr Behdad Eghbali",
              "owner_kind": "person",
              "owner_number": null,
              "owner_id": "person:mr behdad eghbali",
              "owner_jurisdiction": null,
              "person": {
                "dob": "1976-05",
                "nationality": "American",
                "residence": "United States"
              },
              "subtitle": "",
              "start": "2023-06-30",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 50\u201375%",
                "Voting: 50\u201375%"
              ],
              "events": [
                {
                  "date": "2023-06-30",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            },
            {
              "owner_name": "Mr Jose E. Feliciano",
              "owner_kind": "person",
              "owner_number": null,
              "owner_id": "person:mr jose e. feliciano",
              "owner_jurisdiction": null,
              "person": {
                "dob": "1973-05",
                "nationality": "American",
                "residence": "United States"
              },
              "subtitle": "",
              "start": "2023-06-30",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 50\u201375%",
                "Voting: 50\u201375%"
              ],
              "events": [
                {
                  "date": "2023-06-30",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            },
            {
              "owner_name": "Todd Lawrence Boehly",
              "owner_kind": "person",
              "owner_number": null,
              "owner_id": "person:todd lawrence boehly",
              "owner_jurisdiction": null,
              "person": {
                "dob": "1973-09",
                "nationality": "American",
                "residence": "United States"
              },
              "subtitle": "",
              "start": "2022-05-25",
              "end": null,
              "active": true,
              "natures": [
                "Significant influence/control"
              ],
              "events": [
                {
                  "date": "2022-05-25",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            },
            {
              "owner_name": "Blueco 22 Investor Holdings Limited",
              "owner_kind": "unresolved",
              "owner_number": "14075320",
              "owner_id": "14075320",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "",
              "start": "2022-05-12",
              "end": "2022-05-25",
              "active": false,
              "natures": [
                "Shares: 25\u201350%",
                "Voting: 25\u201350%"
              ],
              "events": [
                {
                  "date": "2022-05-12",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2022-05-25",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            },
            {
              "owner_name": "Blues Investment Midco Limited",
              "owner_kind": "unresolved",
              "owner_number": "14091439",
              "owner_id": "14091439",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "",
              "start": "2022-05-06",
              "end": "2023-06-30",
              "active": false,
              "natures": [
                "Shares: 50\u201375%",
                "Voting: 50\u201375%"
              ],
              "events": [
                {
                  "date": "2022-05-06",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2023-06-30",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            },
            {
              "owner_name": "Todd Lawrence Boehly",
              "owner_kind": "person",
              "owner_number": null,
              "owner_id": "person:todd lawrence boehly",
              "owner_jurisdiction": null,
              "person": {
                "dob": "1973-09",
                "nationality": "American",
                "residence": "United States"
              },
              "subtitle": "",
              "start": "2022-04-28",
              "end": "2022-05-12",
              "active": false,
              "natures": [
                "Shares: 25\u201350%",
                "Voting: 25\u201350%"
              ],
              "events": [
                {
                  "date": "2022-04-28",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2022-05-12",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            }
          ],
          "gaps": []
        }
      ],
      "filings": [
        {
          "date": "2022-09-05",
          "type": "PSC02",
          "description": "Notification of Blueco 22 Midco Limited as a PSC on 12 July 2022",
          "doc_url": "https://find-and-update.company-information.service.gov.uk/company/02536231/filing-history/MzM1MDgwOTIxN2FkaXF6a2N4/document?format=pdf&download=0"
        },
        {
          "date": "2022-09-05",
          "type": "PSC07",
          "description": "Cessation of Blueco 22 Limited as a PSC on 12 July 2022",
          "doc_url": "https://find-and-update.company-information.service.gov.uk/company/02536231/filing-history/MzM1MDgwOTA3OWFkaXF6a2N4/document?format=pdf&download=0"
        },
        {
          "date": "2023-04-12",
          "type": "PSC05",
          "description": "Change of details for Blueco 22 Midco Limited as a PSC",
          "doc_url": "https://find-and-update.company-information.service.gov.uk/company/02536231/filing-history/MzM3NjAwNTkzMGFkaXF6a2N4/document?format=pdf&download=0"
        }
      ],
      "ultimate_today": [
        {
          "name": "Mr Behdad Eghbali",
          "kind": "person",
          "jurisdiction": null
        },
        {
          "name": "Mr Jose E. Feliciano",
          "kind": "person",
          "jurisdiction": null
        },
        {
          "name": "Todd Lawrence Boehly",
          "kind": "person",
          "jurisdiction": null
        }
      ],
      "stats": {
        "chain_depth": 2,
        "entities": 5,
        "people": 3,
        "foreign": 0,
        "gaps": 0,
        "bods_statements": 29,
        "comparison": "Reaching the ultimate owner means walking 2 layer(s) up the chain through 5 companies \u2014 each its own PSC page and filing history on Companies House. Here it is one timeline."
      },
      "bods": {
        "statements": [
          {
            "statementId": "opencheck-50d5a5f44b4b645b7c217073",
            "recordId": "opencheck-50d5a5f44b4b645b7c217073",
            "declarationSubject": "opencheck-50d5a5f44b4b645b7c217073",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity",
                "details": "Private limited company"
              },
              "name": "CHELSEA FC HOLDINGS LIMITED",
              "identifiers": [
                {
                  "id": "02536231",
                  "scheme": "GB-COH",
                  "schemeName": "Companies House"
                }
              ],
              "jurisdiction": {
                "name": "United Kingdom",
                "code": "GB"
              },
              "foundingDate": "1990-09-12"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02536231"
            }
          },
          {
            "statementId": "opencheck-a84584291e27141ac0f8e65b",
            "recordId": "opencheck-a84584291e27141ac0f8e65b",
            "declarationSubject": "opencheck-a84584291e27141ac0f8e65b",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Blueco 22 Midco Limited",
              "identifiers": [
                {
                  "id": "14213798",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "United Kingdom",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02536231"
            }
          },
          {
            "statementId": "opencheck-d090de2afcb4c60afd9df21e",
            "recordId": "opencheck-0c573e1b5f97e4febcfa228b",
            "declarationSubject": "opencheck-50d5a5f44b4b645b7c217073",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-07-12",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-50d5a5f44b4b645b7c217073",
              "interestedParty": "opencheck-a84584291e27141ac0f8e65b",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2022-07-12"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2022-07-12"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Right to appoint or remove directors",
                  "startDate": "2022-07-12"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02536231"
            }
          },
          {
            "statementId": "opencheck-38aaceed71efb715b30bff16",
            "recordId": "opencheck-38aaceed71efb715b30bff16",
            "declarationSubject": "opencheck-38aaceed71efb715b30bff16",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Blueco 22 Limited",
              "identifiers": [
                {
                  "id": "13949552",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "England",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02536231"
            }
          },
          {
            "statementId": "opencheck-221534b97e6796bf112f5a72",
            "recordId": "opencheck-149768f7cfab036556c11c0e",
            "declarationSubject": "opencheck-50d5a5f44b4b645b7c217073",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-07-12",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-50d5a5f44b4b645b7c217073",
              "interestedParty": "opencheck-38aaceed71efb715b30bff16",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2022-07-12",
                  "startDate": "2022-07-04"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02536231"
            }
          },
          {
            "statementId": "opencheck-ba31d721aaa1334d2570c47c",
            "recordId": "opencheck-ba31d721aaa1334d2570c47c",
            "declarationSubject": "opencheck-ba31d721aaa1334d2570c47c",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Fordstam Limited",
              "identifiers": [
                {
                  "id": "04784127",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "United Kingdom",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02536231"
            }
          },
          {
            "statementId": "opencheck-b81ead794d6d85c26b918732",
            "recordId": "opencheck-02a749f5f9ace24ab9dfc9d9",
            "declarationSubject": "opencheck-50d5a5f44b4b645b7c217073",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-05-30",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-50d5a5f44b4b645b7c217073",
              "interestedParty": "opencheck-ba31d721aaa1334d2570c47c",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2022-05-30",
                  "startDate": "2016-04-06"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02536231"
            }
          },
          {
            "statementId": "opencheck-fb0d48926b190fe75b86444e",
            "recordId": "opencheck-047c959cf023b9a6b24a0a52",
            "declarationSubject": "opencheck-a84584291e27141ac0f8e65b",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-07-04",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-a84584291e27141ac0f8e65b",
              "interestedParty": "opencheck-38aaceed71efb715b30bff16",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2022-07-04"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2022-07-04"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Right to appoint or remove directors",
                  "startDate": "2022-07-04"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14213798"
            }
          },
          {
            "statementId": "opencheck-1e1dfab62ac2cc21499e23a4",
            "recordId": "opencheck-1e1dfab62ac2cc21499e23a4",
            "declarationSubject": "opencheck-1e1dfab62ac2cc21499e23a4",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "22 Holdco Limited",
              "identifiers": [
                {
                  "id": "14075518",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "England And Wales",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/13949552"
            }
          },
          {
            "statementId": "opencheck-3313c7a4e6c825b03146b466",
            "recordId": "opencheck-2ec6b5053547065d5e573998",
            "declarationSubject": "opencheck-38aaceed71efb715b30bff16",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-04-29",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-38aaceed71efb715b30bff16",
              "interestedParty": "opencheck-1e1dfab62ac2cc21499e23a4",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2022-04-29"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2022-04-29"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Right to appoint or remove directors",
                  "startDate": "2022-04-29"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/13949552"
            }
          },
          {
            "statementId": "opencheck-4f2db904a344e1dd5dbfa09c",
            "recordId": "opencheck-4f2db904a344e1dd5dbfa09c",
            "declarationSubject": "opencheck-4f2db904a344e1dd5dbfa09c",
            "recordType": "person",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "personType": "knownPerson",
              "names": [
                {
                  "type": "legal",
                  "fullName": "Todd Lawrence Boehly"
                }
              ],
              "nationalities": [
                {
                  "name": "American"
                }
              ],
              "birthDate": "1973-09"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/13949552"
            }
          },
          {
            "statementId": "opencheck-524d72b429e82c05784ce517",
            "recordId": "opencheck-ff3328f8aaf77e73de0c1def",
            "declarationSubject": "opencheck-38aaceed71efb715b30bff16",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-04-29",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-38aaceed71efb715b30bff16",
              "interestedParty": "opencheck-4f2db904a344e1dd5dbfa09c",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2022-04-29",
                  "startDate": "2022-04-28"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/13949552"
            }
          },
          {
            "statementId": "opencheck-b6e4ca51adda9e77d6bfad4a",
            "recordId": "opencheck-b6e4ca51adda9e77d6bfad4a",
            "declarationSubject": "opencheck-b6e4ca51adda9e77d6bfad4a",
            "recordType": "person",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "personType": "knownPerson",
              "names": [
                {
                  "type": "legal",
                  "fullName": "Jonathan Goldstein"
                }
              ],
              "nationalities": [
                {
                  "name": "British"
                }
              ],
              "birthDate": "1966-03"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/13949552"
            }
          },
          {
            "statementId": "opencheck-a37f2e6f550daf12b82ecb93",
            "recordId": "opencheck-42eba2312459c16f38024608",
            "declarationSubject": "opencheck-38aaceed71efb715b30bff16",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-04-27",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-38aaceed71efb715b30bff16",
              "interestedParty": "opencheck-b6e4ca51adda9e77d6bfad4a",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2022-04-27",
                  "startDate": "2022-03-02"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2022-04-27",
                  "startDate": "2022-03-02"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/13949552"
            }
          },
          {
            "statementId": "opencheck-5e8c388b40311a20a0db04a8",
            "recordId": "opencheck-5e8c388b40311a20a0db04a8",
            "declarationSubject": "opencheck-5e8c388b40311a20a0db04a8",
            "recordType": "person",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "personType": "knownPerson",
              "names": [
                {
                  "type": "legal",
                  "fullName": "Mr Roman Abramovich"
                }
              ],
              "nationalities": [
                {
                  "name": "Russian"
                }
              ],
              "birthDate": "1966-10"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/04784127"
            }
          },
          {
            "statementId": "opencheck-432d7f1faa87d9cce296d6e5",
            "recordId": "opencheck-6686ce1ae80ac88c5e5f4f08",
            "declarationSubject": "opencheck-ba31d721aaa1334d2570c47c",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2016-04-06",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-ba31d721aaa1334d2570c47c",
              "interestedParty": "opencheck-5e8c388b40311a20a0db04a8",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2016-04-06"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/04784127"
            }
          },
          {
            "statementId": "opencheck-b6c03fe096682961e8a616c4",
            "recordId": "opencheck-b6c03fe096682961e8a616c4",
            "declarationSubject": "opencheck-b6c03fe096682961e8a616c4",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity",
                "details": "Private limited company"
              },
              "name": "22 HOLDCO LIMITED",
              "identifiers": [
                {
                  "id": "14075518",
                  "scheme": "GB-COH",
                  "schemeName": "Companies House"
                }
              ],
              "jurisdiction": {
                "name": "United Kingdom",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-5d34491f3ab016f62eaccd2c",
            "recordId": "opencheck-5d34491f3ab016f62eaccd2c",
            "declarationSubject": "opencheck-5d34491f3ab016f62eaccd2c",
            "recordType": "person",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "personType": "knownPerson",
              "names": [
                {
                  "type": "legal",
                  "fullName": "Mr Behdad Eghbali"
                }
              ],
              "nationalities": [
                {
                  "name": "American"
                }
              ],
              "birthDate": "1976-05"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-3774dc345c39e5dfdb96ace7",
            "recordId": "opencheck-60a05e7697e6ec8c018cfd30",
            "declarationSubject": "opencheck-b6c03fe096682961e8a616c4",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2023-06-30",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-b6c03fe096682961e8a616c4",
              "interestedParty": "opencheck-5d34491f3ab016f62eaccd2c",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of shares \u2013 More than 50% but less than 75% as a member of a firm",
                  "share": {
                    "exclusiveMinimum": 50,
                    "maximum": 75
                  },
                  "startDate": "2023-06-30"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of voting rights - More than 50% but less than 75% as a member of a firm",
                  "share": {
                    "exclusiveMinimum": 50,
                    "maximum": 75
                  },
                  "startDate": "2023-06-30"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-8d8d334b6d46ec368c9d97cd",
            "recordId": "opencheck-8d8d334b6d46ec368c9d97cd",
            "declarationSubject": "opencheck-8d8d334b6d46ec368c9d97cd",
            "recordType": "person",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "personType": "knownPerson",
              "names": [
                {
                  "type": "legal",
                  "fullName": "Mr Jose E. Feliciano"
                }
              ],
              "nationalities": [
                {
                  "name": "American"
                }
              ],
              "birthDate": "1973-05"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-e1e181ce99341a7267c6a21d",
            "recordId": "opencheck-3a672ce1504a6d0b397a91e5",
            "declarationSubject": "opencheck-b6c03fe096682961e8a616c4",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2023-06-30",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-b6c03fe096682961e8a616c4",
              "interestedParty": "opencheck-8d8d334b6d46ec368c9d97cd",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of shares \u2013 More than 50% but less than 75% as a member of a firm",
                  "share": {
                    "exclusiveMinimum": 50,
                    "maximum": 75
                  },
                  "startDate": "2023-06-30"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of voting rights - More than 50% but less than 75% as a member of a firm",
                  "share": {
                    "exclusiveMinimum": 50,
                    "maximum": 75
                  },
                  "startDate": "2023-06-30"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-b0aa73babe17a64faf0c7aff",
            "recordId": "opencheck-b0aa73babe17a64faf0c7aff",
            "declarationSubject": "opencheck-b0aa73babe17a64faf0c7aff",
            "recordType": "person",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "personType": "knownPerson",
              "names": [
                {
                  "type": "legal",
                  "fullName": "Todd Lawrence Boehly"
                }
              ],
              "nationalities": [
                {
                  "name": "American"
                }
              ],
              "birthDate": "1973-09"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-8e7af6fbdaa123b1098d7385",
            "recordId": "opencheck-d4086fbe172ff02cba029d19",
            "declarationSubject": "opencheck-b6c03fe096682961e8a616c4",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-05-25",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-b6c03fe096682961e8a616c4",
              "interestedParty": "opencheck-b0aa73babe17a64faf0c7aff",
              "interests": [
                {
                  "type": "otherInfluenceOrControl",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Has significant influence or control as a member of a firm",
                  "startDate": "2022-04-28"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-ad3c95f10195a728494029ee",
            "recordId": "opencheck-ad3c95f10195a728494029ee",
            "declarationSubject": "opencheck-ad3c95f10195a728494029ee",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Blueco 22 Investor Holdings Limited",
              "identifiers": [
                {
                  "id": "14075320",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "England",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-928cacf8450ca07ad3991ac3",
            "recordId": "opencheck-7cd8fd1989cfb6743c80dc12",
            "declarationSubject": "opencheck-b6c03fe096682961e8a616c4",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-05-25",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-b6c03fe096682961e8a616c4",
              "interestedParty": "opencheck-ad3c95f10195a728494029ee",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 More than 25% but not more than 50%",
                  "share": {
                    "exclusiveMinimum": 25,
                    "maximum": 50
                  },
                  "endDate": "2022-05-25",
                  "startDate": "2022-05-12"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - More than 25% but not more than 50%",
                  "share": {
                    "exclusiveMinimum": 25,
                    "maximum": 50
                  },
                  "endDate": "2022-05-25",
                  "startDate": "2022-05-12"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-9033e91dc5e05246159848b4",
            "recordId": "opencheck-9033e91dc5e05246159848b4",
            "declarationSubject": "opencheck-9033e91dc5e05246159848b4",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Blues Investment Midco Limited",
              "identifiers": [
                {
                  "id": "14091439",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "England",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-e3d67f664b6abd971192e656",
            "recordId": "opencheck-4cec0caa768d0e3072f21725",
            "declarationSubject": "opencheck-b6c03fe096682961e8a616c4",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2023-06-30",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-b6c03fe096682961e8a616c4",
              "interestedParty": "opencheck-9033e91dc5e05246159848b4",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 More than 50% but less than 75%",
                  "share": {
                    "exclusiveMinimum": 50,
                    "maximum": 75
                  },
                  "endDate": "2023-06-30",
                  "startDate": "2022-05-06"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - More than 50% but less than 75%",
                  "share": {
                    "exclusiveMinimum": 50,
                    "maximum": 75
                  },
                  "endDate": "2023-06-30",
                  "startDate": "2022-05-06"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-2c83eb41e63d408d8105cf0d",
            "recordId": "opencheck-2c83eb41e63d408d8105cf0d",
            "declarationSubject": "opencheck-2c83eb41e63d408d8105cf0d",
            "recordType": "person",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "personType": "knownPerson",
              "names": [
                {
                  "type": "legal",
                  "fullName": "Todd Lawrence Boehly"
                }
              ],
              "nationalities": [
                {
                  "name": "American"
                }
              ],
              "birthDate": "1973-09"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          },
          {
            "statementId": "opencheck-95a1d881736863ba32f06e44",
            "recordId": "opencheck-f4158634610b66a5c1802850",
            "declarationSubject": "opencheck-b6c03fe096682961e8a616c4",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2022-05-12",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-b6c03fe096682961e8a616c4",
              "interestedParty": "opencheck-2c83eb41e63d408d8105cf0d",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of shares \u2013 More than 25% but not more than 50%",
                  "share": {
                    "exclusiveMinimum": 25,
                    "maximum": 50
                  },
                  "endDate": "2022-05-12",
                  "startDate": "2022-04-28"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of voting rights - More than 25% but not more than 50%",
                  "share": {
                    "exclusiveMinimum": 25,
                    "maximum": 50
                  },
                  "endDate": "2022-05-12",
                  "startDate": "2022-04-28"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/14075518"
            }
          }
        ],
        "statement_count": 29
      }
    },
    "02529667": {
      "company": {
        "number": "02529667",
        "name": "NEWCASTLE UNITED LIMITED",
        "display_name": "Newcastle United Limited",
        "hook": "From Mike Ashley to a Saudi sovereign-wealth consortium \u2014 and an early gap in the record",
        "blurb": "When the PSC register began, Newcastle United filed a statement that it believed there was no registrable person \u2014 then withdrew it the same day. Mike Ashley's St James Holdings was recorded from 2017 until the October 2021 takeover by PZ Newco, the vehicle for the Saudi Public Investment Fund\u2013led consortium.",
        "ch_url": "https://find-and-update.company-information.service.gov.uk/company/02529667/persons-with-significant-control"
      },
      "window": {
        "start": "2016-07-31",
        "end": "2026-06-19"
      },
      "root": "02529667",
      "entities": [
        {
          "number": "02529667",
          "name": "NEWCASTLE UNITED LIMITED",
          "level": 0,
          "kind": "root",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/02529667/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "Pz Newco Limited",
              "owner_kind": "entity",
              "owner_number": "12388231",
              "owner_id": "12388231",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "Saudi PIF\u2013led consortium",
              "start": "2021-10-07",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2021-10-07",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            },
            {
              "owner_name": "St James Holdings Limited",
              "owner_kind": "unresolved",
              "owner_number": "06254688",
              "owner_id": "06254688",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "Mike Ashley era",
              "start": "2017-04-06",
              "end": "2021-10-07",
              "active": false,
              "natures": [
                "Shares: 75%+"
              ],
              "events": [
                {
                  "date": "2017-04-06",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2021-10-07",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            }
          ],
          "gaps": [
            {
              "label": "No registrable person",
              "code": "no-individual-or-entity-with-signficant-control",
              "start": "2016-07-31",
              "end": "2016-07-31",
              "withdrawn": true,
              "active": false
            }
          ]
        },
        {
          "number": "12388231",
          "name": "PZ NEWCO LIMITED",
          "level": 1,
          "kind": "entity",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/12388231/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "Ncuk Investment Limited",
              "owner_kind": "entity",
              "owner_number": "12415316",
              "owner_id": "12415316",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "PIF's UK investment vehicle",
              "start": "2020-04-08",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2020-04-08",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            },
            {
              "owner_name": "Jv1 Limited",
              "owner_kind": "unresolved",
              "owner_number": "12419163",
              "owner_id": "12419163",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "",
              "start": "2020-04-08",
              "end": "2020-04-08",
              "active": false,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2020-04-08",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2020-04-08",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            },
            {
              "owner_name": "Cantervale Limited",
              "owner_kind": "unresolved",
              "owner_number": "11128634",
              "owner_id": "11128634",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "",
              "start": "2020-01-06",
              "end": "2020-04-08",
              "active": false,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2020-01-06",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2020-04-08",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            }
          ],
          "gaps": []
        },
        {
          "number": "12415316",
          "name": "NCUK INVESTMENT LIMITED",
          "level": 2,
          "kind": "entity",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/12415316/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "Public Investment Fund",
              "owner_kind": "foreign",
              "owner_number": null,
              "owner_id": "foreign:public investment fund",
              "owner_jurisdiction": "Saudi Arabia",
              "person": null,
              "subtitle": "",
              "start": "2020-01-21",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2020-01-21",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            }
          ],
          "gaps": []
        }
      ],
      "filings": [],
      "ultimate_today": [
        {
          "name": "Public Investment Fund",
          "kind": "foreign",
          "jurisdiction": "Saudi Arabia"
        }
      ],
      "stats": {
        "chain_depth": 2,
        "entities": 3,
        "people": 0,
        "foreign": 1,
        "gaps": 0,
        "bods_statements": 14,
        "comparison": "Reaching the ultimate owner means walking 2 layer(s) up the chain through 3 companies \u2014 each its own PSC page and filing history on Companies House. Here it is one timeline."
      },
      "bods": {
        "statements": [
          {
            "statementId": "opencheck-6f9aa6a7ff866178b264b7c8",
            "recordId": "opencheck-6f9aa6a7ff866178b264b7c8",
            "declarationSubject": "opencheck-6f9aa6a7ff866178b264b7c8",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity",
                "details": "Private limited company"
              },
              "name": "NEWCASTLE UNITED LIMITED",
              "identifiers": [
                {
                  "id": "02529667",
                  "scheme": "GB-COH",
                  "schemeName": "Companies House"
                }
              ],
              "jurisdiction": {
                "name": "United Kingdom",
                "code": "GB"
              },
              "foundingDate": "1990-09-06"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02529667"
            }
          },
          {
            "statementId": "opencheck-f02408a139d9e546ae7d3378",
            "recordId": "opencheck-f02408a139d9e546ae7d3378",
            "declarationSubject": "opencheck-f02408a139d9e546ae7d3378",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Pz Newco Limited",
              "identifiers": [
                {
                  "id": "12388231",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "England",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02529667"
            }
          },
          {
            "statementId": "opencheck-bdb0df27f1707ab2d89ba0a5",
            "recordId": "opencheck-de07bd1860ccaf736dda311b",
            "declarationSubject": "opencheck-6f9aa6a7ff866178b264b7c8",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2021-10-07",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-6f9aa6a7ff866178b264b7c8",
              "interestedParty": "opencheck-f02408a139d9e546ae7d3378",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2021-10-07"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2021-10-07"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Right to appoint or remove directors",
                  "startDate": "2021-10-07"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02529667"
            }
          },
          {
            "statementId": "opencheck-b0877c80ae128020f5a245da",
            "recordId": "opencheck-b0877c80ae128020f5a245da",
            "declarationSubject": "opencheck-b0877c80ae128020f5a245da",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "St James Holdings Limited",
              "identifiers": [
                {
                  "id": "06254688",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "England And Wales",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02529667"
            }
          },
          {
            "statementId": "opencheck-5651e5fa0fdde391c7c258c3",
            "recordId": "opencheck-d761c120664390fcf2af6afd",
            "declarationSubject": "opencheck-6f9aa6a7ff866178b264b7c8",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2021-10-07",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-6f9aa6a7ff866178b264b7c8",
              "interestedParty": "opencheck-b0877c80ae128020f5a245da",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2021-10-07",
                  "startDate": "2017-04-06"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02529667"
            }
          },
          {
            "statementId": "opencheck-af8c9e7be31619b4a8710d63",
            "recordId": "opencheck-ed64d1f91be3ed87fd8e0c47",
            "declarationSubject": "opencheck-6f9aa6a7ff866178b264b7c8",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2016-07-31",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-6f9aa6a7ff866178b264b7c8",
              "interestedParty": {
                "reason": "noBeneficialOwners",
                "description": "The company knows or has reasonable cause to believe that there is no registrable person or registrable relevant legal entity in relation to the company"
              },
              "interests": []
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/02529667"
            }
          },
          {
            "statementId": "opencheck-2aa594eb24eded93830ecfb4",
            "recordId": "opencheck-2aa594eb24eded93830ecfb4",
            "declarationSubject": "opencheck-2aa594eb24eded93830ecfb4",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Ncuk Investment Limited",
              "identifiers": [
                {
                  "id": "12415316",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "England",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/12388231"
            }
          },
          {
            "statementId": "opencheck-d810f15639ffeb8dcaae8da8",
            "recordId": "opencheck-300a0e4fd6ddf03fedcb5fa4",
            "declarationSubject": "opencheck-f02408a139d9e546ae7d3378",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2020-04-08",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-f02408a139d9e546ae7d3378",
              "interestedParty": "opencheck-2aa594eb24eded93830ecfb4",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2020-04-08"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2020-04-08"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Right to appoint or remove directors",
                  "startDate": "2020-04-08"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/12388231"
            }
          },
          {
            "statementId": "opencheck-bf54f5148e79d82a1064a3b5",
            "recordId": "opencheck-bf54f5148e79d82a1064a3b5",
            "declarationSubject": "opencheck-bf54f5148e79d82a1064a3b5",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Jv1 Limited",
              "identifiers": [
                {
                  "id": "12419163",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "England",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/12388231"
            }
          },
          {
            "statementId": "opencheck-f7a1dec5bfa40620538ce4ba",
            "recordId": "opencheck-bded5b4b316593050b429998",
            "declarationSubject": "opencheck-f02408a139d9e546ae7d3378",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2020-04-08",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-f02408a139d9e546ae7d3378",
              "interestedParty": "opencheck-bf54f5148e79d82a1064a3b5",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2020-04-08",
                  "startDate": "2020-04-08"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2020-04-08",
                  "startDate": "2020-04-08"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Right to appoint or remove directors",
                  "endDate": "2020-04-08",
                  "startDate": "2020-04-08"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/12388231"
            }
          },
          {
            "statementId": "opencheck-44a58bdc4a59161be180ccd4",
            "recordId": "opencheck-44a58bdc4a59161be180ccd4",
            "declarationSubject": "opencheck-44a58bdc4a59161be180ccd4",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Cantervale Limited",
              "identifiers": [
                {
                  "id": "11128634",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "United Kingdom",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/12388231"
            }
          },
          {
            "statementId": "opencheck-77bbbf56829d4807febe4191",
            "recordId": "opencheck-65319dc1c88a18082f3ac0e2",
            "declarationSubject": "opencheck-f02408a139d9e546ae7d3378",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2020-04-08",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-f02408a139d9e546ae7d3378",
              "interestedParty": "opencheck-44a58bdc4a59161be180ccd4",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2020-04-08",
                  "startDate": "2020-01-06"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2020-04-08",
                  "startDate": "2020-01-06"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Right to appoint or remove directors",
                  "endDate": "2020-04-08",
                  "startDate": "2020-01-06"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/12388231"
            }
          },
          {
            "statementId": "opencheck-9ccaf20b930868d7aa44bd95",
            "recordId": "opencheck-9ccaf20b930868d7aa44bd95",
            "declarationSubject": "opencheck-9ccaf20b930868d7aa44bd95",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Public Investment Fund",
              "identifiers": [],
              "jurisdiction": {
                "name": "Saudi Arabia",
                "code": "SA"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/12415316"
            }
          },
          {
            "statementId": "opencheck-a7e06aea2270764778bc9d3b",
            "recordId": "opencheck-955ab4baf14ffd9e64f45423",
            "declarationSubject": "opencheck-2aa594eb24eded93830ecfb4",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2020-01-21",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-2aa594eb24eded93830ecfb4",
              "interestedParty": "opencheck-9ccaf20b930868d7aa44bd95",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2020-01-21"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2020-01-21"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Right to appoint or remove directors",
                  "startDate": "2020-01-21"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/12415316"
            }
          }
        ],
        "statement_count": 14
      }
    },
    "00036624": {
      "company": {
        "number": "00036624",
        "name": "EVERTON FOOTBALL CLUB COMPANY, LIMITED",
        "display_name": "Everton Football Club Company, Limited",
        "hook": "A named individual owner, resident offshore, replaced after eight years",
        "blurb": "Unusually for a Premier League club, Everton's beneficial owner was a named individual: Farhad Moshiri, a British national resident in Monaco, recorded from 2016. Control passed to the Friedkin Group's Roundhouse Capital in December 2024, after the collapse of the proposed 777 Partners deal.",
        "ch_url": "https://find-and-update.company-information.service.gov.uk/company/00036624/persons-with-significant-control"
      },
      "window": {
        "start": "2016-04-06",
        "end": "2026-06-19"
      },
      "root": "00036624",
      "entities": [
        {
          "number": "00036624",
          "name": "EVERTON FOOTBALL CLUB COMPANY, LIMITED",
          "level": 0,
          "kind": "root",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/00036624/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "Roundhouse Capital Holdings Limited",
              "owner_kind": "entity",
              "owner_number": "15992615",
              "owner_id": "15992615",
              "owner_jurisdiction": null,
              "person": null,
              "subtitle": "The Friedkin Group",
              "start": "2024-12-18",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2024-12-18",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            },
            {
              "owner_name": "Ardavan Farhad Moshiri",
              "owner_kind": "person",
              "owner_number": null,
              "owner_id": "person:ardavan farhad moshiri",
              "owner_jurisdiction": null,
              "person": {
                "dob": "1955-05",
                "nationality": "British",
                "residence": "Monaco"
              },
              "subtitle": "",
              "start": "2016-04-06",
              "end": "2024-12-18",
              "active": false,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+"
              ],
              "events": [
                {
                  "date": "2016-04-06",
                  "type": "notified",
                  "label": "Notified as PSC"
                },
                {
                  "date": "2024-12-18",
                  "type": "ceased",
                  "label": "Ceased to be a PSC"
                }
              ]
            }
          ],
          "gaps": []
        },
        {
          "number": "15992615",
          "name": "ROUNDHOUSE CAPITAL HOLDINGS LIMITED",
          "level": 1,
          "kind": "entity",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/15992615/persons-with-significant-control",
          "lanes": [
            {
              "owner_name": "Mr Thomas Dan Friedkin",
              "owner_kind": "person",
              "owner_number": null,
              "owner_id": "person:mr thomas dan friedkin",
              "owner_jurisdiction": null,
              "person": {
                "dob": "1965-02",
                "nationality": "American",
                "residence": "United States"
              },
              "subtitle": "",
              "start": "2024-10-02",
              "end": null,
              "active": true,
              "natures": [
                "Shares: 75%+",
                "Voting: 75%+",
                "Appoints directors"
              ],
              "events": [
                {
                  "date": "2024-10-02",
                  "type": "notified",
                  "label": "Notified as PSC"
                }
              ]
            }
          ],
          "gaps": []
        }
      ],
      "filings": [],
      "ultimate_today": [
        {
          "name": "Mr Thomas Dan Friedkin",
          "kind": "person",
          "jurisdiction": null
        }
      ],
      "stats": {
        "chain_depth": 1,
        "entities": 2,
        "people": 1,
        "foreign": 0,
        "gaps": 0,
        "bods_statements": 8,
        "comparison": "Reaching the ultimate owner means walking 1 layer(s) up the chain through 2 companies \u2014 each its own PSC page and filing history on Companies House. Here it is one timeline."
      },
      "bods": {
        "statements": [
          {
            "statementId": "opencheck-15c3110651f077afccf470a2",
            "recordId": "opencheck-15c3110651f077afccf470a2",
            "declarationSubject": "opencheck-15c3110651f077afccf470a2",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity",
                "details": "Private limited company"
              },
              "name": "EVERTON FOOTBALL CLUB COMPANY, LIMITED",
              "identifiers": [
                {
                  "id": "00036624",
                  "scheme": "GB-COH",
                  "schemeName": "Companies House"
                }
              ],
              "jurisdiction": {
                "name": "United Kingdom",
                "code": "GB"
              },
              "foundingDate": "1892-07-12"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/00036624"
            }
          },
          {
            "statementId": "opencheck-82bac06ce6610c96c4128e57",
            "recordId": "opencheck-82bac06ce6610c96c4128e57",
            "declarationSubject": "opencheck-82bac06ce6610c96c4128e57",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity"
              },
              "name": "Roundhouse Capital Holdings Limited",
              "identifiers": [
                {
                  "id": "15992615",
                  "scheme": "GB-COH",
                  "schemeName": "UK Companies House"
                }
              ],
              "jurisdiction": {
                "name": "England And Wales",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/00036624"
            }
          },
          {
            "statementId": "opencheck-2f7e5817b3e16c649019174f",
            "recordId": "opencheck-751b12b931b0682c65c2a12c",
            "declarationSubject": "opencheck-15c3110651f077afccf470a2",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2024-12-18",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-15c3110651f077afccf470a2",
              "interestedParty": "opencheck-82bac06ce6610c96c4128e57",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2024-12-18"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2024-12-18"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": false,
                  "details": "Right to appoint or remove directors",
                  "startDate": "2024-12-18"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/00036624"
            }
          },
          {
            "statementId": "opencheck-c71a0ef28b681f574e410224",
            "recordId": "opencheck-c71a0ef28b681f574e410224",
            "declarationSubject": "opencheck-c71a0ef28b681f574e410224",
            "recordType": "person",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "personType": "knownPerson",
              "names": [
                {
                  "type": "legal",
                  "fullName": "Ardavan Farhad Moshiri"
                }
              ],
              "nationalities": [
                {
                  "name": "British"
                }
              ],
              "birthDate": "1955-05"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/00036624"
            }
          },
          {
            "statementId": "opencheck-3cf4b093201242bbe0fdd6d9",
            "recordId": "opencheck-f214cb55e8b905e92ebb0672",
            "declarationSubject": "opencheck-15c3110651f077afccf470a2",
            "recordType": "relationship",
            "recordStatus": "closed",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2024-12-18",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-15c3110651f077afccf470a2",
              "interestedParty": "opencheck-c71a0ef28b681f574e410224",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2024-12-18",
                  "startDate": "2016-04-06"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "endDate": "2024-12-18",
                  "startDate": "2016-04-06"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/00036624"
            }
          },
          {
            "statementId": "opencheck-ad4062dc5091c30ec07a93ee",
            "recordId": "opencheck-ad4062dc5091c30ec07a93ee",
            "declarationSubject": "opencheck-ad4062dc5091c30ec07a93ee",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity",
                "details": "Private limited company"
              },
              "name": "ROUNDHOUSE CAPITAL HOLDINGS LIMITED",
              "identifiers": [
                {
                  "id": "15992615",
                  "scheme": "GB-COH",
                  "schemeName": "Companies House"
                }
              ],
              "jurisdiction": {
                "name": "United Kingdom",
                "code": "GB"
              }
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/15992615"
            }
          },
          {
            "statementId": "opencheck-b2701d8f543192ffd5a0b973",
            "recordId": "opencheck-b2701d8f543192ffd5a0b973",
            "declarationSubject": "opencheck-b2701d8f543192ffd5a0b973",
            "recordType": "person",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "personType": "knownPerson",
              "names": [
                {
                  "type": "legal",
                  "fullName": "Mr Thomas Dan Friedkin"
                }
              ],
              "nationalities": [
                {
                  "name": "American"
                }
              ],
              "birthDate": "1965-02"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/15992615"
            }
          },
          {
            "statementId": "opencheck-327b67903f80c8359aab25ea",
            "recordId": "opencheck-0f50c58adb85980b667b5b4e",
            "declarationSubject": "opencheck-ad4062dc5091c30ec07a93ee",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2024-10-02",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-ad4062dc5091c30ec07a93ee",
              "interestedParty": "opencheck-b2701d8f543192ffd5a0b973",
              "interests": [
                {
                  "type": "shareholding",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of shares \u2013 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2024-10-02"
                },
                {
                  "type": "votingRights",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Ownership of voting rights - 75% or more",
                  "share": {
                    "exclusiveMinimum": 75,
                    "maximum": 100
                  },
                  "startDate": "2024-10-02"
                },
                {
                  "type": "appointmentOfBoard",
                  "directOrIndirect": "direct",
                  "beneficialOwnershipOrControl": true,
                  "details": "Right to appoint or remove directors",
                  "startDate": "2024-10-02"
                }
              ]
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/15992615"
            }
          }
        ],
        "statement_count": 8
      }
    },
    "05819262": {
      "company": {
        "number": "05819262",
        "name": "KEMBLE WATER HOLDINGS LIMITED",
        "display_name": "Kemble Water Holdings Limited",
        "hook": "The anti-timeline: the ultimate UK parent of Thames Water reports no owner at all",
        "blurb": "The company everyone wants to identify the owner of has, in law, no timeline to show. Kemble Water Holdings \u2014 the ultimate UK parent of Thames Water \u2014 reports no registrable person: its consortium of pension and sovereign-wealth funds is deliberately fragmented so that no single party crosses the 25% threshold. The register's answer is a single, standing statement.",
        "ch_url": "https://find-and-update.company-information.service.gov.uk/company/05819262/persons-with-significant-control"
      },
      "window": {
        "start": "2017-06-01",
        "end": "2026-06-19"
      },
      "root": "05819262",
      "entities": [
        {
          "number": "05819262",
          "name": "KEMBLE WATER HOLDINGS LIMITED",
          "level": 0,
          "kind": "root",
          "ch_url": "https://find-and-update.company-information.service.gov.uk/company/05819262/persons-with-significant-control",
          "lanes": [],
          "gaps": [
            {
              "label": "No registrable person",
              "code": "no-individual-or-entity-with-signficant-control",
              "start": "2017-06-01",
              "end": null,
              "withdrawn": false,
              "active": true
            }
          ]
        }
      ],
      "filings": [],
      "ultimate_today": [
        {
          "name": "No registrable person",
          "kind": "gap",
          "jurisdiction": null
        }
      ],
      "stats": {
        "chain_depth": 0,
        "entities": 1,
        "people": 0,
        "foreign": 0,
        "gaps": 1,
        "bods_statements": 2,
        "comparison": "Reaching the ultimate owner means walking 0 layer(s) up the chain through 1 company \u2014 each its own PSC page and filing history on Companies House. Here it is one timeline."
      },
      "bods": {
        "statements": [
          {
            "statementId": "opencheck-72cd376023a33d80e0365d09",
            "recordId": "opencheck-72cd376023a33d80e0365d09",
            "declarationSubject": "opencheck-72cd376023a33d80e0365d09",
            "recordType": "entity",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2026-06-19",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "entityType": {
                "type": "registeredEntity",
                "details": "Private limited company"
              },
              "name": "KEMBLE WATER HOLDINGS LIMITED",
              "identifiers": [
                {
                  "id": "05819262",
                  "scheme": "GB-COH",
                  "schemeName": "Companies House"
                }
              ],
              "jurisdiction": {
                "name": "United Kingdom",
                "code": "GB"
              },
              "foundingDate": "2006-05-04"
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/05819262"
            }
          },
          {
            "statementId": "opencheck-9649343c22d28f542b63626b",
            "recordId": "opencheck-24984661d8ed59caa6651241",
            "declarationSubject": "opencheck-72cd376023a33d80e0365d09",
            "recordType": "relationship",
            "recordStatus": "new",
            "statementDate": "2026-06-19",
            "publicationDetails": {
              "bodsVersion": "0.4",
              "publicationDate": "2017-06-01",
              "publisher": {
                "name": "OpenCheck"
              }
            },
            "recordDetails": {
              "isComponent": false,
              "subject": "opencheck-72cd376023a33d80e0365d09",
              "interestedParty": {
                "reason": "noBeneficialOwners",
                "description": "The company knows or has reasonable cause to believe that there is no registrable person or registrable relevant legal entity in relation to the company"
              },
              "interests": []
            },
            "source": {
              "type": [
                "officialRegister"
              ],
              "description": "UK Companies House",
              "retrievedAt": "2026-06-19T10:52:24Z",
              "url": "https://find-and-update.company-information.service.gov.uk/company/05819262"
            }
          }
        ],
        "statement_count": 2
      }
    }
  },
  "built": "2026-06-19"
};
