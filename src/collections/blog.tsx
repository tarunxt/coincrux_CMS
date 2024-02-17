import { buildCollection, buildProperty } from "firecms";
import { localeCollection } from "./locales.tsx";
import CustomColorTextField from "./CustomColorTextField.tsx";


// Define the News type
type News = {
  coinDescription: string;
  coinHeading: string;
  coinImage: string;
  createdBy: string;
  marketsCard: boolean;
  assetName: string;
  topicTitle: string;
  category: string[];
  totalDislikes: string[];
  totalLikes: string[];
  createdAt: Date;

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
      description: "Summary should be between 100 and 450 characters",
      validation: { 
        required: true , 

        max: 450, 
        min: 100, 
      },
      dataType: "string",
      Field: CustomColorTextField,
      customProps: { minValue: 100, maxValue: 450 },
      
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
    category: 
    buildProperty({
      name: 'Category',
      validation: { required: true },
      dataType: "array",
      of: {
        dataType: "string",
      enumValues: {
          "Banking": "Banking",
          "Economy": "Economy",
          "Environment": "Environment",
          "Industry": "Industry",
          "Infra": "Infra",
          "IPO": "IPO",
          "Markets": "Markets",
          "Politics": "Politics",
          "Science": "Science",
          "Sports": "Sports",
          "Stats": "Stats",
          "Wealth": "Wealth",
          "Bitcoin": "Bitcoin",
          "Ethereum": "Ethereum",
          "Analytics": "Analytics",
          "Exchange": "Exchange",
          "Metaverse": "Metaverse",
          "Blockchain": "Blockchain",
          "GameFi": "GameFi",
          "Finance": "Finance",
          "Others": "Others",
          "Mining": "Mining",
          "Security": "Security",
          "World": "World",
          "Legal": "Legal",
          "Altcoins": {
            id: "Altcoins",
            label: "Altcoins",disabled: true,
          },
          
                    // "Markets": "Markets",

                    // "Economy": "Economy",

      },

}
  ,
  }),
  
  
  
  
   
  
    assetName: buildProperty({
      name: "Asset Name",
      validation: { required: true },
      dataType: "string",
    }),
    marketsCard: {
      name: "Markets Card",
      dataType: "boolean",
    },
   
    createdBy: {
      name: "Created By",
      validation: { required: true },
      dataType: "string",
      enumValues: {
        Samridhi: "Samridhi Jain",
        Yash: "Yash Soni",
        Noopur: "Noopur Kumari",
        Samiksha: "Samiksha Dhaka",
        Anushka: "Ansuhka Verma",
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
