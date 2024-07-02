import { buildCollection, buildProperty, } from "firecms";
import { localeCollection } from "./locales.tsx";
import CustomColorTextField from "./CustomColorTextField.tsx";

import { Select } from "@mui/material";
import AssetSelect from "./AssetSelectProps.tsx";

type News = {
  coinDescription: string;
  coinHeading: string;
  coinImage: string;
  createdBy: string;
  assetName: {
    Exchange: string;
    Asset: string;
  };
  
  category: { Crypto: string[]; India: string[], World:string[] };
  createdAt: Date;
  sourceUrl: string;
  sourceName: string;
};



export const NewsCollection = buildCollection<News>({
  name: "News",
  singularName: "News",
  path: "News",
  icon: "News",
  group: "News",
  permissions: ({ authController, user }) => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  subcollections: [localeCollection],
  properties: {
      coinHeading: {
        name: "Title",
        description: "Title should be between 20 and 100 characters",
        validation: {
          max: 100,
          min: 20,
          required: true,
        },
        Field: CustomColorTextField,
        customProps: { minValue: 20, maxValue: 100},
        disabled: false,
        dataType: "string",
      },
    coinDescription:buildProperty( {
      name: "Summary",
      description: "Summary should be between 100 and 400 characters",
      validation: { 
        required: true , 
        max: 400, 
        min: 100, 
      },
      dataType: "string",
      Field: CustomColorTextField,
      customProps: { minValue: 100, maxValue: 400 }, 
    }),

    coinImage: buildProperty({
      name: "Image",
      dataType: "string",
      validation: { required: true },
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    }),
    
    category: {
      name: "Category",
      dataType: "map",
      validation: { required: true },
      properties: {
          Crypto: {
              name: "Crypto",
              dataType: "array",
              of: {
                  dataType: "string",
                  enumValues: {
                      "Top Picks":"Top Picks",
                      "Bitcoin": "Bitcoin",
                      "Ethereum": "Ethereum",
                      "Business":"Business",
                 
                  
                      "Altcoins": "Altcoins",
                      "Markets": "Markets",
                     
                      "Blockchain": "Blockchain",
                      "DeFi": "DeFi",
                      "Exchange": "Exchange",
                      
                      "Metaverse": "Metaverse",
                      "Mining": "Mining",
                      "NFTs":"NFTs",
                      "Regulation":"Regulation",
                      "Security": "Security",
                      "ICO":"ICO",
               
                      "Others": "Others",

                  }
              }
          },
          India: {
              name: "India",
              dataType: "array",
              of: {
                  dataType: "string",
                  enumValues: {
                      "Top Picks":"Top Picks",
                      "Banking": "Banking",
                      "Economy": "Economy",
           
                      "Industry": "Industry",
                      "Infra": "Infra",
                      "Markets": "Markets",
                      "IPO": "IPO",
                      "Politics": "Politics",
                      "Science & Tech": "Science & Tech",
                      "Sports": "Sports",
                      "Startups": "Startups",
                      "Geopolitics":"Geopolicts",
                      "Business":"Business",
                      "Others":"Others"

                  }
              }
          },
          World: {
            name: "World",
            dataType: "array",
            of: {
                dataType: "string",
                enumValues: {
                  "Business":"Business",
                    "Economy": "Economy",
                    
                    "Markets": "Markets",
                  
                    "Politics": "Politics",
                    "Science & Tech": "Science & Tech",

                    "Sports": "Sports",
                    "Others": "Others",

                }
            }
        }
      }
  },



  assetName:{
    name: "Asset Name",
    //validation: { required: true },
    validation: { required: true },
    dataType: "map",
    properties: {
      Exchange: {
      
        name: "Exchange",
        validation: { required: true },
        dataType: "string",
      
        enumValues: {
          
          "CRYPTOCAP": "CRYPTOCAP",
          "NASDAQ": "NASDAQ",
          "BSE": "BSE",
          "NONE":"NONE"
        }
      },
      Asset: {

      
        name: "Asset",
        dataType: "string",
        Field: AssetSelect,
      },
    },
  },
  sourceUrl: {
    validation: { required: true },
    name: "Source URL",
    dataType: "string",
  },

  sourceName:{
    validation: { required: true },
    name: "Source Name",
    dataType: "string"
  },
    createdBy: {
      name: "Created By",
      validation: { required: true },
      dataType: "string",
      enumValues: {

        "Hrithik":{
          id:"Hrithik",
          label:"Hrithik"

        },
        "Md Imran Khan":{
          id: "Md Imran Khan",
          label: "Md Imran Khan",
        },
        
        "Vaibhav":{
          id: "Vaibhav Yadav",
          label: "Vaibhav Yadav",
        },
       "Vipasyana Bhanu":{
        id:"Vipasyana Bhanu",
        label:"Vipasyana Bhanu"
       }

      },
    },
    createdAt: buildProperty({
      name: "Created on",
      dataType: "date",
      autoValue: "on_create",
    }),    
  },


  
});


