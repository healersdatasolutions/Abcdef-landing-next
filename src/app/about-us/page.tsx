



"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function AboutUsPage() {
   const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://d2thvodm3xyo6j.cloudfront.net/media/2021/04/d81733f712331d8a-600x338.jpg",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=",
    },
  
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://img.freepik.com/premium-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=",
    },
  
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://img.freepik.com/premium-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://d2thvodm3xyo6j.cloudfront.net/media/2021/04/d81733f712331d8a-600x338.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://img.freepik.com/premium-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://d2thvodm3xyo6j.cloudfront.net/media/2021/04/d81733f712331d8a-600x338.jpg",
    },
  
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://img.freepik.com/premium-photo/headshot-young-happy-successful-male-office-worker-businessman-wearing-suit-smiling-camera-with-positive-face-expression-while-posing-against-grey-studio-background-business-people-concept_95891-6895.jpg",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://d2thvodm3xyo6j.cloudfront.net/media/2021/04/d81733f712331d8a-600x338.jpg",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.jpg?s=612x612&w=0&k=20&c=EtRJGnNOFPJ2HniBSLWKzsL9Xf7GHinHd5y2Tx3da0E=",
    },
  ];
  
  return(
    <div>

      {/* <div className='text-center text-4xl'>AboutUsPage</div> */}
      <HeroParallax products={products} />

      <h1 className="
        text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 max-w-6xl text-center mx-auto mt-20 mb-8
      ">Healers Healthcare
      </h1>
      <p className="
        text-neutral-800 dark:text-neutral-200 max-w-6xl text-base md:text-base font-normal mb-8 text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla obcaecati aperiam quidem culpa necessitatibus? Perferendis error qui eveniet ipsam expedita aliquam ut velit rem commodi, asperiores nulla consequuntur cupiditate voluptatem.
        Praesentium quasi beatae eius doloremque delectus dignissimos incidunt commodi possimus eveniet accusantium, quod est magnam. Atque quos ratione ex expedita saepe eius quidem excepturi modi, sunt officia libero aut molestiae!
        Distinctio dignissimos amet, id iste dolor adipisci possimus. Cupiditate error facere fugit harum quo eum similique repellat, eaque beatae deleniti rem nostrum sit libero, nihil porro, et reiciendis ipsa quasi.
        Quod deserunt, tempore nemo sed nesciunt odio totam earum, voluptatem qui, dolores fugit delectus facere nulla temporibus blanditiis libero dignissimos voluptate id illum soluta inventore sapiente voluptatibus! Et, recusandae mollitia!
        Accusantium quae optio corrupti facere harum esse maiores dolorum quos, reiciendis consequuntur! Ipsam porro perspiciatis nostrum exercitationem saepe quibusdam sint recusandae, voluptate laborum asperiores voluptas odio animi molestias inventore id?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla obcaecati aperiam quidem culpa necessitatibus? Perferendis error qui eveniet ipsam expedita aliquam ut velit rem commodi, asperiores nulla consequuntur cupiditate voluptatem.
        Praesentium quasi beatae eius doloremque delectus dignissimos incidunt commodi possimus eveniet accusantium, quod est magnam. Atque quos ratione ex expedita saepe eius quidem excepturi modi, sunt officia libero aut molestiae!
        Distinctio dignissimos amet, id iste dolor adipisci possimus. Cupiditate error facere fugit harum quo eum similique repellat, eaque beatae deleniti rem nostrum sit libero, nihil porro, et reiciendis ipsa quasi.
        Quod deserunt, tempore nemo sed nesciunt odio totam earum, voluptatem qui, dolores fugit delectus facere nulla temporibus blanditiis libero dignissimos voluptate id illum soluta inventore sapiente voluptatibus! Et, recusandae mollitia!
        Accusantium quae optio corrupti facere harum esse maiores dolorum quos, reiciendis consequuntur! Ipsam porro perspiciatis nostrum exercitationem saepe quibusdam sint recusandae, voluptate laborum asperiores voluptas odio animi molestias inventore id?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla obcaecati aperiam quidem culpa necessitatibus? Perferendis error qui eveniet ipsam expedita aliquam ut velit rem commodi, asperiores nulla consequuntur cupiditate voluptatem.
        Praesentium quasi beatae eius doloremque delectus dignissimos incidunt commodi possimus eveniet accusantium, quod est magnam. Atque quos ratione ex expedita saepe eius quidem excepturi modi, sunt officia libero aut molestiae!
        Distinctio dignissimos amet, id iste dolor adipisci possimus. Cupiditate error facere fugit harum quo eum similique repellat, eaque beatae deleniti rem nostrum sit libero, nihil porro, et reiciendis ipsa quasi.
        Quod deserunt, tempore nemo sed nesciunt odio totam earum, voluptatem qui, dolores fugit delectus facere nulla temporibus blanditiis libero dignissimos voluptate id illum soluta inventore sapiente voluptatibus! Et, recusandae mollitia!
        Accusantium quae optio corrupti facere harum esse maiores dolorum quos, reiciendis consequuntur! Ipsam porro perspiciatis nostrum exercitationem saepe quibusdam sint recusandae, voluptate laborum asperiores voluptas odio animi molestias inventore id?       
      </p>
      
    </div>
  )
}

