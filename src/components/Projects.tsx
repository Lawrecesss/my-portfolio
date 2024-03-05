import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
const projects = [
  {
    id: 0,
    name: "Telebird",
    preview: "https://hanminthant.com/wp-content/uploads/2024/02/IMG_6917.jpg",
  },
  {
    id: 0,
    name: "Game Hub",
    preview: "https://hanminthant.com/wp-content/uploads/2024/02/IMG_6917.jpg",
  },
  {
    id: 0,
    name: "Chess",
    preview: "https://hanminthant.com/wp-content/uploads/2024/02/IMG_6917.jpg",
  },
  {
    id: 0,
    name: "ExpenseTracker",
    preview: "https://hanminthant.com/wp-content/uploads/2024/02/IMG_6917.jpg",
  },
  {
    id: 0,
    name: "Portfolio",
    preview: "https://hanminthant.com/wp-content/uploads/2024/02/IMG_6917.jpg",
  },
];
const Projects = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="text-3xl font-bold mb-20">Projects</div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="sm:w-full sm:max-w-4xl w-[60%]"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="sm:basis-1/2">
              <div className="p-1">
                <Card className="p-6">
                  <CardContent className="flex sm:h-[450px] h-[300px] flex-col items-center">
                    <span className="text-lg font-semibold mb-5">
                      {project.name}
                    </span>
                    <img
                      src={project.preview}
                      className="w-[350px] h-[350px] rounded-xl"
                    />
                    <Button className="m-5 rounded-2xl">
                      Check <ChevronRight size={20} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
