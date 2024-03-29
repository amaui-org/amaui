import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlucose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Glucose'

      short_name='Glucose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M576 976q-35 0-67-14.5T454 920L250 682q-11-14-9.5-30.5T256 624l18-13q20-15 45-16t46 13l55 35V256q0-17 11.5-28.5T460 216q17 0 28.5 11.5T500 256v460q0 24-21 35t-41-2l-56-36 144 169q6 7 14 10.5t17 3.5h203q33 0 56.5-23.5T840 816V536q0-17 11.5-28.5T880 496q17 0 28.5 11.5T920 536v280q0 66-47 113t-113 47H576Zm-16-360V416q0-17 11.5-28.5T600 376q17 0 28.5 11.5T640 416v200h-80Zm140 0V456q0-17 11.5-28.5T740 416q17 0 28.5 11.5T780 456v160h-80ZM180 496q-59 0-99.5-40.5T40 358q0-34 13.5-59t63.5-82l33-37q12-14 30-14t30 14l33 38q51 59 64 83t13 57q0 57-41 97.5T180 496Zm0-80q25 0 42.5-17t17.5-41q0-17-8.5-30.5T185 272l-5-5-5 5q-32 36-43.5 54T120 358q0 24 17 41t43 17Zm0-58Zm660 538H526h314Z"/>
    </Icon>
  );
});

IconMaterialGlucose.displayName = 'AmauiIconMaterialGlucose';

export default IconMaterialGlucose;
