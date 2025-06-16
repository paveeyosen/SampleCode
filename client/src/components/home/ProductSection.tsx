import { useQuery } from '@tanstack/react-query';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'wouter';
import { Product } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ProductSection = () => {
  const { toast } = useToast();
  
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const handleWhatsAppOrder = (productName: string, productPrice: string) => {
    const message = `Hi! I'm interested in ordering ${productName} (${productPrice}). Could you please provide more details about availability and ordering?`;
    const whatsappUrl = `https://wa.me/919003179421?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isLoading) {
    return (
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  if (error || !products) {
    return (
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p>Error loading products. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-purple-800">
            Essential Oil Products
          </h2>
          <p className="text-lg text-gray-600">
            We proudly offer Doterra essential oils known for their exceptional purity and potency to complement your healing journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-purple-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-56 object-cover"
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
                    className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full flex items-center"
                  >
                    <FaArrowRight className="mr-2" />
                    Order on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/products">
            <Button 
              variant="link" 
              className="inline-flex items-center text-purple-700 hover:text-purple-500 font-medium"
            >
              View All Products <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
