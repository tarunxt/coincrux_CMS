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
    
    category: {
      name: 'Category',
      validation: { required: true },
      dataType: "array",
      of: {
          dataType: "string",
          enumValues: {
  "Banking": {
    id: "Banking",
    label: "Banking",
  },
  "Economy": {
    id: "Economy",
    label: "Economy",
  },
  "Environment": {
    id: "Environment",
    label: "Environment",
  },
  "Industry": {
    id: "Industry",
    label: "Industry",
  },
  "Infra": {
    id: "Infra",
    label: "Infra",
  },
  "IPO": {
    id: "IPO",
    label: "IPO",
  },
  "Markets": {
    id: "Markets",
    label: "Markets",
  },
  "Politics": {
    id: "Politics",
    label: "Politics",
  },
  "Science": {
    id: "Science",
    label: "Science",
  },
  "Sports": {
    id: "Sports",
    label: "Sports",
  },
  "Stats": {
    id: "Stats",
    label: "Stats",
  },
  "Wealth": {
    id: "Wealth",
    label: "Wealth",
  },
  "Bitcoin": {
    id: "Bitcoin",
    label: "Bitcoin",
  },
  "Ethereum": {
    id: "Ethereum",
    label: "Ethereum",
  },
  "Analytics": {
    id: "Analytics",
    label: "Analytics",
  },
  "Exchange": {
    id: "Exchange",
    label: "Exchange",
  },
  "Metaverse": {
    id: "Metaverse",
    label: "Metaverse",
  },
  "Blockchain": {
    id: "Blockchain",
    label: "Blockchain",
  },
  "GameFi": {
    id: "GameFi",
    label: "GameFi",
  },
  "Finance": {
    id: "Finance",
    label: "Finance",
  },
  "Others": {
    id: "Others",
    label: "Others",
  },
  "Mining": {
    id: "Mining",
    label: "Mining",
  },
  "Security": {
    id: "Security",
    label: "Security",
  },
  "World": {
    id: "World",
    label: "World",
  },
  "Legal": {
    id: "Legal",
    label: "Legal",
  },
  "Altcoins": {
    id: "Altcoins",
    label: "Altcoins",
  }
}

         
      },
  },

      




  
  

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
        "Samridhi":{
          id: "Samridhi Jain",
          label: "Samridhi Jain",

        },
        "Yash":{
          id: "Yash Soni",
          label: "Yash Soni",
        },
        "Noopur":{
          id: "Noopur Kumari",
          label: "Noopur Kumari",
        },
        "Samiksha":{
          id: "Samiksha Dhaka",
          label: "Samiksha Dhaka",
        },
        "Anushka":{
          id: "Anushka Verma",
          label: "Anushka Verma",
        },
        "Janisha":{
          id: "Janisha Bansal",
          label: "Janisha Bansal",
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
