import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold">Welcome to Hungary</h1>
        <p className="mt-4 text-lg">Discover the beauty and culture of Hungary</p>
        <img src="/placeholder.svg?w=800&h=400" alt="Hungary" className="mx-auto rounded-xl object-cover mt-6" />
      </header>

      <Separator />

      {/* Key Facts Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Key Facts About Hungary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Population</CardTitle>
            </CardHeader>
            <CardContent>
              <p>9.6 million</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Capital City</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Budapest</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Language</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hungarian</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Currency</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Forint (HUF)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Tourist Destinations Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Popular Tourist Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <img src="/placeholder.svg?w=400&h=300" alt="Budapest" className="mx-auto rounded-xl object-cover" />
            <CardHeader>
              <CardTitle>Budapest</CardTitle>
            </CardHeader>
            <CardContent>
              <p>The capital city, known for its stunning architecture and vibrant culture.</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg?w=400&h=300" alt="Lake Balaton" className="mx-auto rounded-xl object-cover" />
            <CardHeader>
              <CardTitle>Lake Balaton</CardTitle>
            </CardHeader>
            <CardContent>
              <p>The largest lake in Central Europe, a popular destination for water sports and relaxation.</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg?w=400&h=300" alt="Eger" className="mx-auto rounded-xl object-cover" />
            <CardHeader>
              <CardTitle>Eger</CardTitle>
            </CardHeader>
            <CardContent>
              <p>A historic city known for its castle, thermal baths, and wine region.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer className="text-center py-10">
        <p>Contact us: info@hungary.com</p>
        <p>Follow us on social media</p>
      </footer>
    </div>
  );
};

export default Index;