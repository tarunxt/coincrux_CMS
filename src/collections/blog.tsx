import { buildCollection, buildProperty } from "firecms";
import { localeCollection } from "./locales.tsx";
import CustomColorTextField from "./CustomColorTextField.tsx";


// Define the News type
type News = {
  coinDescription: string;
  coinHeading: string;
  coinImage: string;
  createdAt: Date;
  createdBy: string;
  marketsCard: boolean;
  assetName: string;
  topicTitle: string;
  category: string[];
  totalDislikes: string[];
  totalLikes: string[];
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
        description: "Title should be between 50 and 100 characters",

        validation: {
          requiredMessage: "You must set a price between 50 and 100",
          max: 150,
          min: 50,
          required: true,
          


        },
        Field: CustomColorTextField,
        customProps: { minValue: 50, maxValue: 150},

        disabled: false,
        

        dataType: "string",
      },
    coinDescription:buildProperty( {
      name: "Summary",
      description: "Summary should be between 150 and 500 characters",
      validation: { 
        required: true , 

        max: 650, 
        min: 150, 
      },
      dataType: "string",
      Field: CustomColorTextField,
      customProps: { minValue: 150, maxValue: 650 },
      
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
    createdAt: buildProperty({
      name: "Created on",
      dataType: "date",
      autoValue: "on_create",
    }),
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
  },
});
