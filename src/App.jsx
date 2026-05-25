import Card from "./components/cards/Card";
import CardImage from "./components/cards/CardImage";
import CardHeader from "./components/cards/CardHeader";
import CardTitle from "./components/cards/CardTitle";
import CardBody from "./components/cards/CardBody";

function App() {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-500">
            Amazing Landscape
          </CardTitle>
        </CardHeader>
        <CardImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          alt="Landscape Image"
        />
        <CardBody>
          <p className="text-gray-500 pt-4 text-4xl">
            This is a simple card body with some text content.
          </p>
          <div className="inline-block bg-blue-700 text-xl text-blue-300 rounded px-2 py-2 mt-4 cursor-pointer hover:bg-red-700 hover:text-white transition ease-in-out duration-300">
            Click ME
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default App;
