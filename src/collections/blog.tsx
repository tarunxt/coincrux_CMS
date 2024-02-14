import { EnumValues, buildCollection, buildProperty } from "firecms";
import { localeCollection } from "./locales.tsx";

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
      validation: { required: true, max: 20, min: 5,     
                   requiredMessage: "You must set a price between 5 and 20",
    },
      dataType: "string",
      //add limit of inputs 

      },
    coinDescription: {
      name: "Summary",
      validation: { required: true , max: 1000, min: 150, 
                   requiredMessage: "You must set a price between 150 and 1000",},
      dataType: "string",
      columnWidth: 500,
    },
    coinImage: buildProperty({
      name: "Image",
      dataType: "string",
      validation: { required: true },
      storage: {
        storagePath: "images",
        acceptedFiles: ["image/*"],
      },
    }),
    category: buildProperty({
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
          // "Markets": "Markets",
          "Metaverse": "Metaverse",
          "Blockchain": "Blockchain",
          "GameFi": "GameFi",
          "Finance": "Finance",
          "Others": "Others",
          "Mining": "Mining",
          "Security": "Security",
          // "Economy": "Economy",
          "World": "World",
          "Legal": "Legal",
          "Altcoins": "Altcoins"
      },
    },
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
        Yash: "Yash Sonu",
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
