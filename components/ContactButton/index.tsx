import Image from "next/image";

type Props = {
  href?: string;
  label?: string;
};

const ContactButton = ({ href = "/support", label = "Prendre Contact" }: Props) => (
  <div className="mt-10">
    <div className="flex flex-wrap gap-5">
      <a
        href={href}
        className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
      >
        {label}
        <Image
          width={20}
          height={20}
          src="/images/icon/icon-arrow-dark.svg"
          alt="Arrow"
          className="dark:hidden"
        />
        <Image
          width={20}
          height={20}
          src="/images/icon/icon-arrow-light.svg"
          alt="Arrow"
          className="hidden dark:block"
        />
      </a>
    </div>
  </div>
);

export default ContactButton;