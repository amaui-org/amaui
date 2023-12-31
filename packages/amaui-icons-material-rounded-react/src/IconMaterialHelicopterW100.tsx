import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelicopterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelicopterW100'

      short_name='Helicopter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M229-593q-33 36-51 81.5T160-416h224q14 0 23-9t9-23v-224q-60 0-107 21.5T229-593Zm-37 305h320q14 0 23-9t9-23v-320q0-14-9-23t-23-9h-68v224q0 24.75-17.625 42.375T384-388H160v68q0 14 9 23t23 9Zm380-126 199-21q12-2 20.5-11t8.5-21v-65H572v118ZM186-172q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h307q5.95 0 9.975 4.035 4.025 4.035 4.025 10T502.975-176q-4.025 4-9.975 4H186Zm6-88q-24.75 0-42.375-17.625T132-320v-96q0-112 76.5-198T416-700h96q24.75 0 42.375 17.625T572-640v80h194l31-72q2-4 4.5-6t7.5-2h5.182q5.873 0 9.845 4.025Q828-631.95 828-626v159q0 23-15.375 40.344T774-407l-202 21v66q0 24.75-17.625 42.375T512-260H192Zm-6-500q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h547q5.95 0 9.975 4.035 4.025 4.035 4.025 10T742.975-764q-4.025 4-9.975 4H186Zm386 346v-118 118Zm-28 126Zm28-126v-118 118Z"/>
    </Icon>
  );
});

IconMaterialHelicopterW100.displayName = 'AmauiIconMaterialHelicopterW100';

export default IconMaterialHelicopterW100;
