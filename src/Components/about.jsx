import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { GiTurtle, GiRiver, GiTigerHead } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";

const features = [
  {
    name: "National River Conservation Plan",
    description:
      "India's central scheme to reduce river pollution, expanding the earlier Ganga Action Plan to cover other major rivers",
    icon: GiRiver,
  },
  {
    name: "Recovery of endangeered species",
    description:
      " • Kashmir Markhor Recovery Project • Great Indian Bustard Recovery Project • Crocodile Conservation Project",

    icon: GiTigerHead,
  },
  {
    name: "Financial and technical assistance",
    description:
      "extended to the State Governments / UnionTerritories under various Centrally Sponsored Schemes, viz, 'Integrated Development of Wildlife Habitats' 'Project Tiger' and 'Project Elephant' for providing better protection and conservation to wildlife along with the improvement of their habitat.",
    icon: FaRupeeSign,
  },
  {
    name: "UNDP Sea Turtle Project,",
    description:
      "A collaboration with India's Ministry of Environment & Forests and coordinated by the WII is a major national effort to conserve Olive Ridley turtles and focusing on habitat mapping, threat reduction (like artificial lights), community engagement, policy review ",
    icon: GiTurtle,
  },
];

export default function About() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-3xl lg:text-balance">
            Common running Govt. Programs for Wildlife Conservation
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
