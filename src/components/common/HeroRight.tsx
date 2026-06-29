import PrimaryButton from "./PrimaryButton";
import SocialLinks from "./SocialLinks";

export default function HeroRight() {
  return (
    <div className="flex flex-col items-center gap-8">
      <SocialLinks />
      <PrimaryButton>CURRÍCULO</PrimaryButton>
    </div>
  );
}