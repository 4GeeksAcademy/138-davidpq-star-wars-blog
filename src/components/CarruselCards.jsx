import Card from "./Card";

export default function CarruselCards({ title, list }) {
    if (list !== undefined) {
        function render() {
            switch (title) {
                case "Characters":
                    return list.characters.map((character) => {
                        return <Card title={title} details={character} key={character.uid}></Card>
                    })
                    break;
                case "Planets":
                    return list.planets.map((planet) => {
                        return <Card title={title} details={planet} key={planet.uid}></Card>
                    })
                    break;
                case "Vehicles":
                    return list.vehicles.map((vehicle) => {
                        return <Card title={title} details={vehicle} key={vehicle.uid}></Card>
                    })
                    break;

                default:
                    break;
            }
        }


        return (
            <div className="mt-5">
                <div className="container mt-4">
                    <h2 className="text-danger fw-bold">{title}</h2>
                </div>
                <div className="container my-4">
                    <div className="overflow-auto">
                        <div className="d-flex flex-row gap-3 pb-3">
                            {render()}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}