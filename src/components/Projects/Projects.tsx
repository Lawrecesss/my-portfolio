import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "./ProjectItems";

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-32 py-20">
      <h1 className="text-3xl text-nav font-nunito font-semibold">Projects</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="h-[430px]">
                  <CardContent className="flex flex-col aspect-square p-6">
                    <span className="text-xl text-center mb-10 font-bold font-nunito">
                      {project.title}
                    </span>
                    <img
                      src={project.preview}
                      className="border mb-5 rounded-xl h-[230px]"
                    />
                    <span className="text-sm font-nunito">
                      {project.description}
                    </span>
                    <span className="flex flex-row mt-3 gap-3">
                      {project.tools?.map((tool) => (
                        <img src={tool.image} width={20} height={15} />
                      ))}
                    </span>
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
