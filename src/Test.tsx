import ImageSlider from "./components/ui/ImageSlider";

const sampleData = [
    { id: '1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
    { id: '2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
    { id: '3', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
    { id: '4', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
    { id: '5', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
];

const Test = () => (
    <div className="max-w-7xl mx-auto py-10">
        <ImageSlider title="End-to-end offerings" data={sampleData} />
        <ImageSlider title="Modular Kitchen Designs" data={sampleData} />
    </div>
);

export default Test;
