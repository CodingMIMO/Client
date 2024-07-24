import { useState } from "react";
import CreatingProfileImage from "../Components/CreatingProfileImg";
import ProfileImageCreated from "../Components/ProfileImgCreated";
import ProfileImageUsedModal from "../Components/ProfileModal";
import Reflexion from "../Components/Reflexion";

export default function WrapupPage() {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {step === 1 && <Reflexion onNext={() => setStep(2)} />}
      {step === 2 && <CreatingProfileImage onNext={() => setStep(3)} />}
      {step === 3 && (
        <ProfileImageCreated onUseImage={() => setIsModalOpen(true)} />
      )}
      <ProfileImageUsedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
