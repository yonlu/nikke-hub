import assaultRifleIcon from "../assets/assault-rifle-icon.svg";
import shotgunIcon from "../assets/shotgun-icon.svg";
import machinegunIcon from "../assets/machinegun-icon.svg";
import rocketLauncherIcon from "../assets/rocket-launcher-icon.svg";
import submachineGunIcon from "../assets/submachine-gun-icon.png";
import sniperRifleIcon from "../assets/sniper-rifle-icon.svg";
import burstOneIcon from "../assets/burst-1-icon.svg";
import burstTwoIcon from "../assets/burst-2-icon.svg";
import burstThreeIcon from "../assets/burst-3-icon.svg";
import iconSlot from "../assets/ele_icon_slot_bg_set.png";
import iconFront from "../assets/ele_front_bg.png";

function isKeyOfObject<T>(
  key: string | number | symbol,
  obj: T
): key is keyof T {
  return key in obj;
}

interface INikkeCard {
  id: string;
  name: string;
  rarity: string;
  burst: string;
  code: string;
  weapon: string;
  image: string;
}

const NikkeCard = ({
  id,
  name,
  rarity,
  burst,
  code,
  weapon,
  image,
}: INikkeCard) => {
  const renderBurstIcon = (burstType: string) => {
    const iconMapper = {
      I: <img src={burstOneIcon} className="left-3 h-10 w-10" />,
      II: <img src={burstTwoIcon} className="left-3 h-10 w-10" />,
      III: <img src={burstThreeIcon} className="left-3 h-10 w-10" />,
    };

    const isBurstTypeKeyValid = isKeyOfObject<typeof iconMapper>(
      burstType,
      iconMapper
    );

    if (isBurstTypeKeyValid) {
      return iconMapper[burstType];
    }

    return iconMapper["I"];
  };

  const renderWeaponIcon = (weaponType: string) => {
    const iconMapper = {
      AR: <img src={assaultRifleIcon} className="left-3 h-10 w-10" />,
      MG: <img src={machinegunIcon} className="left-3 h-10 w-10" />,
      SG: <img src={shotgunIcon} className="left-3 h-10 w-10" />,
      SMG: <img src={submachineGunIcon} className="left-3 h-10 w-10" />,
      RL: <img src={rocketLauncherIcon} className="left-3 h-10 w-10" />,
      SR: <img src={sniperRifleIcon} className="left-3 h-10 w-10" />,
    };

    const isWeaponTypeKeyValid = isKeyOfObject<typeof iconMapper>(
      weaponType,
      iconMapper
    );

    if (isWeaponTypeKeyValid) {
      return iconMapper[weaponType];
    }

    return iconMapper["AR"];
  };

  return (
    <div
      key={id}
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white lg:h-80 h-96"
    >
      <div className="absolute top-5 right-5">
        <div className="relative z-10 w-64">
          <div className="flex flex-col">
            {renderWeaponIcon(weapon)}
            {renderBurstIcon(burst)}
          </div>
        </div>
      </div>
      <div className="relative bg-transparent group-hover:opacity-75 sm:h-96">
        <img src={iconSlot} alt="" className="absolute sm:h-full sm:w-full" />
        <img
          src={image}
          alt=""
          className="absolute sm:h-full sm:w-full object-cover object-center"
        />
        <img
          src={iconFront}
          alt=""
          className="absolute left-0 bottom-0 w-full invert opacity-50"
        />
      </div>
      <div className="hidden flex-1 flex-col space-y-2 p-4 border border-gray-200">
        <h3 className="text-sm font-medium text-gray-900">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{rarity}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{burst}</p>
          <p className="text-base font-medium text-gray-900">{code}</p>
          <p className="text-base font-medium text-gray-900">{weapon}</p>
        </div>
      </div>
    </div>
  );
};

export { NikkeCard };
