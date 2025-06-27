import Image from "next/image";

const RightImgBackground = () => {
  return (
    <>
      <Image
        src="/frame2.png"
        alt="Background Image"
        // width={500}
        // height={500}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        // style={{ objectFit: "contain" }}
        // className="object-contain"
      />
    </>
  );
};

export default RightImgBackground;
