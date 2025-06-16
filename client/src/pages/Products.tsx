import { useQuery } from '@tanstack/react-query';
import { Product } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Products = () => {
  const { toast } = useToast();
  
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const handleWhatsAppOrder = (productName: string, productPrice: string) => {
    const message = `Hi! I'm interested in ordering ${productName} (${productPrice}). Could you please provide more details about availability and ordering?`;
    const whatsappUrl = `https://wa.me/919003179421?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-purple-800">
            Essential Oils
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore our collection of pure, therapeutic-grade essential oils to enhance your wellbeing journey. Each oil is carefully selected for its exceptional quality and healing properties.
          </p>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-xl font-heading font-bold mb-3 text-purple-800">Why Choose Doterra?</h2>
            <p className="text-gray-600">
              Essential oils are known for their unmatched purity, rigorous testing standards, and sustainable sourcing practices. Experience the difference that quality makes in your aromatherapy and wellness routines.
            </p>
          </div>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">
            <p>Loading products...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p>Error loading products. Please try again later.</p>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products?.map((product) => (
                <Card key={product.id} className="bg-purple-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-2 text-purple-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-600 font-medium">{product.price}</span>
                      <Button 
                        onClick={() => handleWhatsAppOrder(product.name, product.price)}
                        className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full"
                      >
                        Order on WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 bg-purple-100 p-8 rounded-xl">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-heading font-bold mb-4 text-purple-800 text-center">
                  How to Use Essential Oils
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium mb-3 text-purple-700">Aromatic</h3>
                    <p className="text-gray-600">
                      Diffuse in a room to purify air, improve mood, and create a peaceful atmosphere. Inhale directly for immediate effects.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium mb-3 text-purple-700">Topical</h3>
                    <p className="text-gray-600">
                      Apply diluted oils to specific areas of the body for targeted benefits. Always use a carrier oil for sensitive skin.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium mb-3 text-purple-700">Internal</h3>
                    <p className="text-gray-600">
                      Some oils can be consumed in small amounts. Always check the label and consult with a healthcare professional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
