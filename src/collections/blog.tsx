import { buildCollection, buildProperty } from "firecms";
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
  topicTitle: string;
  category: { Crypto: string[]; India: string[] };
  totalDislikes: string[];
  totalLikes: string[];
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
                      "Bitcoin": "Bitcoin",
                      "Ethereum": "Ethereum",
                      "Analytics": "Analytics",
                      "Exchange": "Exchange",
                      "Altcoins": "Altcoins",
                      "Metaverse": "Metaverse",
                      "Blockchain": "Blockchain",
                      "GameFi": "GameFi",
                      "Finance": "Finance",
                      "Others": "Others",
                      "Mining": "Mining",
                      "Security": "Security",
                      "Economy": "Economy", 
                      "World": "World",
                      "Legal": "Legal",
                      "Markets": "Markets",



                  }
              }
          },
          India: {
              name: "India",
              dataType: "array",
              of: {
                  dataType: "string",
                  enumValues: {
                      "Banking": "Banking",
                      "Economy": "Economy",
                      "Environment": "Environment",
                      "Industry": "Industry",
                      "Infra": "Infra",
                      "Markets": "Markets",
                      "IPO": "IPO",
                      "Politics": "Politics",
                      "Science": "Science",
                      "Sports": "Sports",
                      "Stats": "Stats",

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
          
          "BINANCE": "BINANCE",
          "NASDAQ": "NASDAQ",
          "NSE": "NSE",
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
       
        "Yash":{
          id: "Yash Soni",
          label: "Yash Soni",
        },
        "Samiksha":{
          id: "Samiksha Dhaka",
          label: "Samiksha Dhaka",
        },
        "Vaibhav":{
          id: "Vaibhav Yadav",
          label: "Vaibhav Yadav",
        },
        "Praneeth Kumar":{
          id: "Praneeth Kumar",
          label: "Praneeth Kumar",
        },
       
       
       


      },
    },


    topicTitle: {
      name: "Topic Title",
      dataType: "string",
    },
    
    totalLikes: {
      name: "Likes",
      dataType: "array",
      of: {
        dataType: "string",
      },
    },
    totalDislikes: {
      name: "Dislikes",
      dataType: "array",
      of: {
        dataType: "string",
      },
    },
    createdAt: buildProperty({
      name: "Created on",
      dataType: "date",
      autoValue: "on_create",
    }),

    
  },
});


