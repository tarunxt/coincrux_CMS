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
  category: { Crypto: string[]; India: string[] };
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
                      "Legal": "Legal"


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
       
        "Yash":{
          id: "Yash Soni",
          label: "Yash Soni",
        },
        "Samiksha":{
          id: "Samiksha Dhaka",
          label: "Samiksha Dhaka",
        },
        "Noopur":{
          id: "Noopur Kumari",
          label: "Noopur Kumari",
        },
       
       "Riya":{
          id: "Riya Singh",
          label: "Riya Singh",
       }
       


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
function PropertyOrBuilder<T>(arg0: {
  name: string; dataType: string; properties: {
    Crypto: {
      name: string; dataType: string; of: {
        dataType: string; enumValues: {
          // Define categories for Crypto
          Banking: string; Economy: string; Environment: string; Industry: string; Infra: string; Markets: string; IPO: string; Politics: string; Science: string; Sports: string; Stats: string; Wealth: string; Bitcoin: string; Ethereum: string; Analytics: string; Exchange: string; Metaverse: string; Blockchain: string; GameFi: string; Finance: string; Others: string; Mining: string; Security: string; Altcoins: string;
        };
      };
    }; India: {
      name: string; dataType: string; of: {
        dataType: string; enumValues: {
          // Define categories for India
          Banking: string; Economy: string; Environment: string; Industry: string; Infra: string; Markets: string; IPO: string; Politics: string; Science: string; Sports: string; Stats: string; Wealth: string; Others: string; Legal: string;
        };
      };
    };
  };
}): import("firecms").PropertyOrBuilder<string, News> {
  throw new Error("Function not implemented.");
}

