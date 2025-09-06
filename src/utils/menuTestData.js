// Simple test script to demonstrate the menu API usage
// This file shows how to use the menu API endpoints

import { menuApi } from '../store/menuApi.js';

// Example of how to use the menu API hooks in a React component:

/*
// 1. Get the menu
const { data: menu, error, isLoading } = useGetMenuQuery();

// 2. Update/patch the menu
const [patchMenu] = usePatchMenuMutation();

// Example: Add a new category
await patchMenu({
  categories: [
    {
      name: "New Category",
      sortOrder: 1,
      isVisible: true,
      items: []
    }
  ]
});

// Example: Add an item to an existing category
await patchMenu({
  categories: [
    {
      id: 1, // existing category ID
      items: [
        {
          name: "New Item",
          price: "$9.99",
          description: "Delicious new item",
          imageUrl: "/path/to/image.jpg",
          isVisible: true
        }
      ]
    }
  ]
});

// Example: Update a category name
await patchMenu({
  categories: [
    {
      id: 1,
      name: "Updated Category Name"
    }
  ]
});

// Example: Remove items from a category
await patchMenu({
  categories: [
    {
      id: 1,
      removeItemIds: [2, 3] // Remove items with IDs 2 and 3
    }
  ]
});

// 3. Upload an image
const [uploadImage] = useUploadMenuImageMutation();
const handleImageUpload = async (file) => {
  try {
    const result = await uploadImage(file).unwrap();
    console.log('Uploaded image URL:', result.imageUrl);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};
*/

// Mock data structure that matches the DTOs:
export const mockMenuData = {
  id: 1,
  tenantId: "test-tenant-123",
  categories: [
    {
      id: 1,
      name: "Sandwiches",
      sortOrder: 1,
      isVisible: true,
      items: [
        {
          id: 1,
          imageUrl: "https://example.com/images/club-sandwich.jpg",
          name: "Club Sandwich",
          price: "$12.99",
          description: "Triple-decker with turkey, bacon, lettuce, and tomato on toasted bread"
        },
        {
          id: 2,
          imageUrl: "https://example.com/images/grilled-cheese.jpg",
          name: "Grilled Cheese Deluxe",
          price: "$8.99",
          description: "Classic grilled cheese with aged cheddar and swiss on sourdough"
        },
        {
          id: 3,
          imageUrl: "https://example.com/images/blt.jpg",
          name: "BLT Supreme",
          price: "$10.50",
          description: "Bacon, lettuce, tomato with avocado on whole grain bread"
        }
      ]
    },
    {
      id: 2,
      name: "Tacos",
      sortOrder: 2,
      isVisible: true,
      items: [
        {
          id: 4,
          imageUrl: "https://example.com/images/carnitas-taco.jpg",
          name: "Carnitas Taco",
          price: "$3.50",
          description: "Slow-cooked pork with onions, cilantro, and lime"
        },
        {
          id: 5,
          imageUrl: "https://example.com/images/fish-taco.jpg",
          name: "Fish Taco",
          price: "$4.25",
          description: "Grilled mahi-mahi with cabbage slaw and chipotle lime crema"
        },
        {
          id: 6,
          imageUrl: "https://example.com/images/veggie-taco.jpg",
          name: "Veggie Taco",
          price: "$3.00",
          description: "Roasted vegetables with black beans and avocado"
        }
      ]
    },
    {
      id: 3,
      name: "Beverages",
      sortOrder: 3,
      isVisible: true,
      items: [
        {
          id: 7,
          imageUrl: "https://example.com/images/coffee.jpg",
          name: "Specialty Coffee",
          price: "$4.50",
          description: "Locally roasted coffee beans, served hot or iced"
        },
        {
          id: 8,
          imageUrl: "https://example.com/images/smoothie.jpg",
          name: "Fresh Fruit Smoothie",
          price: "$6.00",
          description: "Blend of seasonal fruits with yogurt and honey"
        }
      ]
    }
  ]
};

// Example patch operations:
export const examplePatchOperations = {
  // Add a new category
  addCategory: {
    categories: [
      {
        name: "Desserts",
        sortOrder: 4,
        isVisible: true,
        items: [
          {
            name: "Chocolate Cake",
            price: "$7.99",
            description: "Rich chocolate cake with vanilla frosting",
            imageUrl: "https://example.com/images/chocolate-cake.jpg",
            isVisible: true
          }
        ]
      }
    ]
  },

  // Update an existing category
  updateCategory: {
    categories: [
      {
        id: 1,
        name: "Gourmet Sandwiches", // Updated name
        isVisible: true
      }
    ]
  },

  // Add items to existing category
  addItemsToCategory: {
    categories: [
      {
        id: 1, // Sandwiches category
        items: [
          {
            name: "Reuben Sandwich",
            price: "$13.50",
            description: "Corned beef, sauerkraut, swiss cheese, and thousand island on rye",
            imageUrl: "https://example.com/images/reuben.jpg",
            isVisible: true
          }
        ]
      }
    ]
  },

  // Remove items from category
  removeItemsFromCategory: {
    categories: [
      {
        id: 1,
        removeItemIds: [2, 3] // Remove grilled cheese and BLT
      }
    ]
  },

  // Hide a category
  hideCategory: {
    categories: [
      {
        id: 3,
        isVisible: false
      }
    ]
  }
};

export default {
  mockMenuData,
  examplePatchOperations
};
