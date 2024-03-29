import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWavingHandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavingHandFilled'

      short_name='WavingHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 23v-1.5q1.875 0 3.188-1.312Q21.5 18.875 21.5 17H23q0 2.5-1.75 4.25T17 23ZM1 7q0-2.5 1.75-4.25T7 1v1.5q-1.875 0-3.188 1.312Q2.5 5.125 2.5 7Zm2.4 13.6q-1.2-1.2-1.8-2.725Q1 16.35 1 14.762q0-1.587.6-3.112.6-1.525 1.8-2.725l5.5-5.5L10.675 5.2l-4.95 4.95q1 .8 1.225 2.137.225 1.338-.875 2.463l.7.7q1.025-.95 1.163-2.525.137-1.575-.838-2.75l8.5-8.5 1.775 1.775-6.35 6.35.7.7L19.5 2.725 21.275 4.5 13.5 12.275l.7.7 6.7-6.7 1.775 1.775-7.425 7.425.7.7 5.325-5.325 1.775 1.775-7.975 7.975q-1.2 1.2-2.725 1.8-1.525.6-3.112.6-1.588 0-3.113-.6T3.4 20.6Z"/>
    </Icon>
  );
});

IconMaterialWavingHandFilled.displayName = 'AmauiIconMaterialWavingHandFilled';

export default IconMaterialWavingHandFilled;
