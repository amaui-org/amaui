import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBubblesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubblesW100'

      short_name='Bubbles'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M547-414 375-585q-4.583-3.75-4.792-9.375-.208-5.625 5.009-10.842Q380-610 385-610q5 0 10 5l171 171v-112q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v130q0 12.75-8.625 21.375T564-386H434q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h113Zm191 202q-37.5 0-63.75-26.25T648-302q0-37.5 26.25-63.75T738-392q37.5 0 63.75 26.25T828-302q0 37.5-26.25 63.75T738-212Zm-546 0q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v180q0 5.95-4.035 9.975-4.035 4.025-10 4.025T804-498.025q-4-4.025-4-9.975v-180q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h340q5.95 0 9.975 4.035 4.025 4.035 4.025 10T541.975-216q-4.025 4-9.975 4H192Z"/>
    </Icon>
  );
});

IconMaterialBubblesW100.displayName = 'AmauiIconMaterialBubblesW100';

export default IconMaterialBubblesW100;
