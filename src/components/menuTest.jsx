import React from 'react';
import { useGetMenuQuery } from '../store/menuApi';

const MenuTest = () => {
  const { data: menu, error, isLoading, refetch } = useGetMenuQuery();

  // Mock data for testing when API is not available
  const mockMenu = {
    id: 1,
    tenantId: "test-tenant",
    categories: [
      {
        id: 1,
        name: "Sandwiches",
        sortOrder: 1,
        isVisible: true,
        items: [
          {
            id: 1,
            imageUrl: "/api/placeholder/150/150",
            name: "Club Sandwich",
            price: "$12.99",
            description: "Triple-decker with turkey, bacon, lettuce, and tomato"
          },
          {
            id: 2,
            imageUrl: "/api/placeholder/150/150",
            name: "Grilled Cheese",
            price: "$8.99",
            description: "Classic grilled cheese with aged cheddar"
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
            id: 3,
            imageUrl: "/api/placeholder/150/150",
            name: "Carnitas Taco",
            price: "$3.50",
            description: "Slow-cooked pork with onions and cilantro"
          },
          {
            id: 4,
            imageUrl: "/api/placeholder/150/150",
            name: "Fish Taco",
            price: "$4.25",
            description: "Grilled fish with cabbage slaw and lime crema"
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
            id: 5,
            imageUrl: "/api/placeholder/150/150",
            name: "Fresh Coffee",
            price: "$3.99",
            description: "Locally roasted coffee beans"
          },
          {
            id: 6,
            imageUrl: "/api/placeholder/150/150",
            name: "Fruit Smoothie",
            price: "$5.99",
            description: "Fresh fruit blend with yogurt"
          }
        ]
      }
    ]
  };

  const displayMenu = menu || mockMenu;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg">Loading menu...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 font-montserrat">
      <h1 className="text-3xl font-bold text-[#446E67] mb-8">Menu Display Test</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p><strong>API Error:</strong> {error?.data?.message || error?.message || 'Failed to load menu'}</p>
          <p className="text-sm mt-2">Using mock data for testing purposes.</p>
        </div>
      )}

      <div className="mb-6 flex gap-4">
        <button
          onClick={refetch}
          className="bg-[#446E67] text-white px-4 py-2 rounded hover:bg-[#365a54] transition-colors"
        >
          Refresh Menu
        </button>
        <div className="text-sm text-gray-600 flex items-center">
          Status: {error ? 'Error (using mock data)' : isLoading ? 'Loading...' : 'Connected'}
        </div>
      </div>

      {/* Menu Display */}
      <div className="space-y-8">
        {displayMenu.categories?.map(category => (
          <div key={category.id} className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-[#446E67]">{category.name}</h2>
                <span className={`px-2 py-1 rounded text-xs ${category.isVisible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {category.isVisible ? 'Visible' : 'Hidden'}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items?.map(item => (
                <div key={item.id} className="border rounded-lg p-4 bg-white">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded mb-3"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik03NSA0NUMzNy41IDQ1IDc1IDgyLjUgNzUgODJTMTEyLjUgNDUgNzUgNDVaIiBmaWxsPSIjOUI5Q0ExIi8+Cjx0ZXh0IHg9Ijc1IiB5PSIxMDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzlCOUNBMSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Tm8gSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
                    }}
                  />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <span className="text-[#446E67] font-bold">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Debug Info */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Debug Information</h3>
        <p className="text-sm text-gray-600 mb-2">
          API Status: {error ? 'Error (using mock data)' : isLoading ? 'Loading...' : 'Connected'}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          API Endpoint: https://localhost:7108/api/menu
        </p>
        <details className="text-sm">
          <summary className="cursor-pointer text-gray-700 hover:text-gray-900">
            View Raw Menu Data
          </summary>
          <pre className="mt-2 p-2 bg-white rounded border overflow-auto text-xs">
            {JSON.stringify(displayMenu, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
};

export default MenuTest;