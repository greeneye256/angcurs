import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My app';
  typeA = 'animals';
  typeC = 'cars';
  typeF = 'flowers';
  carsList = 'Audi\n' +
    'BMW\n' +
    'Buick\n' +
    'Cadillac\n' +
    'Chevrolet\n' +
    'Chrysler\n' +
    'Dodge\n' +
    'Ferrari\n' +
    'Ford\n' +
    'GM\n' +
    'GEM\n' +
    'GMC\n' +
    'Honda\n' +
    'Hummer\n' +
    'Hyundai\n' +
    'Infiniti\n' +
    'Isuzu\n' +
    'Jaguar\n' +
    'Jeep\n' +
    'Kia\n' +
    'Lamborghini\n' +
    'Land Rover\n' +
    'Lexus\n' +
    'Lincoln\n' +
    'Lotus\n' +
    'Mazda\n' +
    'Mercedes-Benz\n' +
    'Mercury\n' +
    'Mitsubishi\n' +
    'Nissan\n' +
    'Oldsmobile\n' +
    'Peugeot\n' +
    'Pontiac\n' +
    'Porsche\n' +
    'Regal\n' +
    'Saab\n' +
    'Saturn\n' +
    'Subaru\n' +
    'Suzuki\n' +
    'Toyota\n' +
    'Volkswagen\n' +
    'Volvo';

  animalsList = 'Aardvark\n' +
    'Aardwolf\n' +
    'African Elephant\n' +
    'African Tree Pangolin\n' +
    'Alligator\n' +
    'Alpaca\n' +
    'Anteater\n' +
    'Antelope\n' +
    'Ape(s)\n' +
    'Arabian Horse\n' +
    'Armadillo\n' +
    'Arthropod(s)\n' +
    'Asian Elephant\n' +
    'Aye-Aye\n' +
    'Baboon\n' +
    'Badger\n' +
    'Bandicoot\n' +
    'Bangle Tiger\n' +
    'Bat(s)\n' +
    'Bearded Dragon\n' +
    'Beaver\n' +
    'Beluga Whale\n' +
    'Bengal Tiger\n' +
    'Big-Horned Sheep\n' +
    'Billy Goat\n' +
    'Bird(s)\n' +
    'Bison\n' +
    'Black Bear\n' +
    'Black Footed Rhino\n' +
    'Black Howler Monkey\n' +
    'Black Rhino\n' +
    'Blacktip Reef Shark\n' +
    'Blue Shark\n' +
    'Blue Whale\n' +
    'Boar\n' +
    'Bob-Cat\n' +
    'Bonobo\n' +
    'Bottlenose Dolphin\n' +
    'Bottlenose Whale\n' +
    'Brown Bear\n' +
    'Buffalo\n' +
    'Bull\n' +
    'Bull frog\n' +
    'Caiman Lizard\n' +
    'Camel\n' +
    'Capuchin Monkey\n' +
    'Capybara\n' +
    'Caribou\n' +
    'Cat(s)\n' +
    'Cattle\n' +
    'Cheetah\n' +
    'Chimpanzee\n' +
    'Chinchilla\n' +
    'Chipmunk\n' +
    'Common Dolphin\n' +
    'Common Seal\n' +
    'Coral(s) and Anemone(s)\n' +
    'Cougar\n' +
    'Cow(s)\n' +
    'Coyote\n' +
    'Crocodile\n' +
    'Crustacean(s)\n' +
    'Dart Frog\n' +
    'Deer\n' +
    'Degus\n' +
    'Dik-Dik\n' +
    'Dingo\n' +
    'Dog(s)\n' +
    'Dogfish Shark\n' +
    'Dolphin\n' +
    'Donkey\n' +
    'Door Mouse\n' +
    'Dormouse\n' +
    'Draft Horse\n' +
    'Duckbill Platypus\n' +
    'Dugong\n' +
    'Dusky Shark\n' +
    'Elephant\n' +
    'Elephant Seal\n' +
    'Elk\n' +
    'Ermine\n' +
    'Eurasian Lynx\n' +
    'Ferret\n' +
    'Fish(es)\n' +
    'Florida Panther\n' +
    'Flying Fox\n' +
    'Fox\n' +
    'Fresh Water Crocodile\n' +
    'Frog\n' +
    'Fur Seal\n' +
    'Galapagos Land Iguana\n' +
    'Galapagos Shark\n' +
    'Galapagos Tortoise\n' +
    'Gazelle\n' +
    'Gecko\n' +
    'Giant Anteater\n' +
    'Giant Panda\n' +
    'Gibbon\n' +
    'Giraffe\n' +
    'Goat\n' +
    'Gopher\n' +
    'Gorilla\n' +
    'Gray Fox\n' +
    'Gray Nurse Shark\n' +
    'Gray Reef Shark\n' +
    'Gray Whale\n' +
    'Great White Shark\n' +
    'Green Poison Dart Frog\n' +
    'Green Sea Turtle\n' +
    'Grizzly Bear\n' +
    'Groundhog\n' +
    'Guinea Pig\n' +
    'Hairy-Nosed Wombat\n' +
    'Hammerhead Shark\n' +
    'Harbor Porpoise\n' +
    'Harbor Seal\n' +
    'Hare\n' +
    'Harp Seal\n' +
    'Hawaiian Monk Seal\n' +
    'Hedgehog\n' +
    'Hippopotamus\n' +
    'Horn Shark\n' +
    'Horse(s)\n' +
    'Howler Monkey\n' +
    'Humpback Whale\n' +
    'Hyena\n' +
    'Hyrax\n' +
    'Iguana\n' +
    'Iguanodon\n' +
    'Impala\n' +
    'Insect(s)\n' +
    'Irrawaddy Dolphin\n' +
    'Jackal\n' +
    'Jackrabbit\n' +
    'Jaguar\n' +
    'Jellyfish\n' +
    'Kangaroo\n' +
    'Kermode Bear\n' +
    'Killer Whale\n' +
    'Koala\n' +
    'Komodo Dragon\n' +
    'Kookaburra\n' +
    'Lama\n' +
    'Lamb\n' +
    'Lancelet\n' +
    'Least Weasel\n' +
    'Leatherback Sea Turtle\n' +
    'Lemming\n' +
    'Lemon Shark\n' +
    'Lemur\n' +
    'Leopard\n' +
    'Leopard Gecko\n' +
    'Leopard Seal\n' +
    'Leopard Shark\n' +
    'Lion\n' +
    'Llama\n' +
    'Loggerhead Turtles\n' +
    'Lynx\n' +
    'Mako Shark\n' +
    'Manatee\n' +
    'Manta Ray\n' +
    'Mantis\n' +
    'Marbled Salamander\n' +
    'Marmot\n' +
    'Marsupial(s)\n' +
    'Meerkat\n' +
    'Megamouth Shark\n' +
    'Melon-Headed Whale\n' +
    'Miniature Donkey\n' +
    'Mink\n' +
    'Minke Whale\n' +
    'Mole\n' +
    'Mole Salamander\n' +
    'Mollusk(s)\n' +
    'Mongoose\n' +
    'Monitor Lizard\n' +
    'Monk Seal\n' +
    'Monkey\n' +
    'Moose\n' +
    'Mountain Lion\n' +
    'Mouse\n' +
    'Mule\n' +
    'Muskox\n' +
    'Muskrat\n' +
    'Naked Mole Rat\n' +
    'Narwhal\n' +
    'Nautilus\n' +
    'Newt\n' +
    'Northern Right Whale\n' +
    'Nurse Shark\n' +
    'Nutria\n' +
    'Nyala\n' +
    'Ocelot\n' +
    'Octopus\n' +
    'Okapi\n' +
    'Opossum\n' +
    'Orangutan\n' +
    'Orca\n' +
    'Otter\n' +
    'Ox\n' +
    'Panda\n' +
    'Panther\n' +
    'Pig\n' +
    'Pilot Whale\n' +
    'Pine Marten\n' +
    'Platypus\n' +
    'Polar Bear\n' +
    'Porcupine\n' +
    'Porpoise\n' +
    'Possum\n' +
    'Potbellied Pig\n' +
    'Potto\n' +
    'Prairie Dog\n' +
    'Proboscis Monkey\n' +
    'Przewalski\'s Wild horse\n' +
    'Puma\n' +
    'Pygmy Hippopotamus\n' +
    'Pygmy Right Whale\n' +
    'Pygmy Sperm Whale\n' +
    'Quokkas\n' +
    'Quolls\n' +
    'Rabbit\n' +
    'Raccoon\n' +
    'Rat\n' +
    'Ray\n' +
    'Red Fox\n' +
    'Red Kangaroo\n' +
    'Red Panda\n' +
    'Red-Eyed Tree Frog\n' +
    'Reef Shark\n' +
    'Reindeer\n' +
    'Rhino\n' +
    'Rhinoceros\n' +
    'Right Whale\n' +
    'Ringed Seal\n' +
    'Risso\'s Dolphin\n' +
    'River Dolphin\n' +
    'Salamander\n' +
    'Sandbar Shark\n' +
    'Scalloped Hammerhead Shark\n' +
    'Sea Lion\n' +
    'Sea Turtles\n' +
    'Seal\n' +
    'Sei Whale\n' +
    'Shark\n' +
    'Sheep\n' +
    'Shortfin Mako Shark\n' +
    'Siberian Tiger\n' +
    'Silky Shark\n' +
    'Skink\n' +
    'Skunk\n' +
    'Slender Loris\n' +
    'Sloth\n' +
    'Sloth Bear\n' +
    'Snake(s)\n' +
    'Snow Fox\n' +
    'Snow Hare\n' +
    'Snow Leopard\n' +
    'Snow Monkey\n' +
    'Somali Wild Ass\n' +
    'Spectacled Bear\n' +
    'Sperm Whale\n' +
    'Spider Monkey\n' +
    'Spiny Dogfish Shark\n' +
    'Spotted Dolphin\n' +
    'Squirrel\n' +
    'Star-Nosed Mole\n' +
    'Stellar Sea Lion\n' +
    'Striped Dolphin\n' +
    'Sun Bear\n' +
    'Takin\n' +
    'Tamarin\n' +
    'Tapir\n' +
    'Tasmanian Devil\n' +
    'Tasmanian Tiger\n' +
    'Terrapin\n' +
    'Thresher Shark\n' +
    'Tiger\n' +
    'Tiger Salamander\n' +
    'Tiger Shark\n' +
    'Topi\n' +
    'Tortoise\n' +
    'Tree Frog\n' +
    'Turtle\n' +
    'Uakari\n' +
    'Vampire Bat\n' +
    'Vancouver Island Marmot\n' +
    'Vervet Monkey\n' +
    'Vicuna\n' +
    'Vole\n' +
    'Wallaby\n' +
    'Walrus\n' +
    'Warthog\n' +
    'Water Buffalo\n' +
    'Weasel\n' +
    'Whale Shark\n' +
    'Whale(s)\n' +
    'White Rhino\n' +
    'White Tailed Deer\n' +
    'White-Beaked Dolphin\n' +
    'Whitetip Reef Shark\n' +
    'Wildcat\n' +
    'Wildebeest\n' +
    'Wobbegong Shark\n' +
    'Wolf\n' +
    'Wolverine\n' +
    'Wombat\n' +
    'Woodchuck\n' +
    'Yak\n' +
    'Yellow-Bellied Marmot\n' +
    'Zebra\n' +
    'Zebu\n' +
    'Zorilla';

  flowersList = 'ageratum\n' +
    'alyssum\n' +
    'aster\n' +
    'campion\n' +
    'canna\n' +
    'carnation\n' +
    'columbine\n' +
    'dahlia\n' +
    'daisy\n' +
    'delphinium\n' +
    'gaillardia\n' +
    'geranium\n' +
    'goldenrod\n' +
    'hollyhock\n' +
    'impatiens\n' +
    'larkspur\n' +
    'lupin\n' +
    'marigold\n' +
    'nasturtium\n' +
    'orchid\n' +
    'pansy violet\n' +
    'phlox\n' +
    'poinsettia\n' +
    'snapdragon\n' +
    'sunflower\n' +
    'sweet pea\n' +
    'violet';

  animalsArray = this.transformToArray(this.animalsList);
  carsArray = this.transformToArray(this.carsList);
  flowersArray = this.transformToArray(this.flowersList);

  animals = [{id: 1, name: this.animalsArray[0]}, {id: 2, name: this.animalsArray[1]}];
  cars = [{id: 1, name: this.carsArray[0]}, {id: 2, name: this.carsArray[1]}];
  flowers = [{id: 1, name: this.flowersArray[0]}, {id: 2, name: this.flowersArray[1]}];

  transformToArray(s: string) {
    const d = s.split('\n');
    return d;
  }

  addAnimal() {
    this.animals.push({id: this.animals.length + 1, name: this.animalsArray[this.animals.length]});
  }

  addCar() {
    this.cars.push({id: this.cars.length + 1, name: this.carsArray[this.cars.length]});
  }

  addFlower() {
    this.flowers.push({id: this.flowers.length + 1, name: this.flowersArray[this.flowers.length]});
  }

}
