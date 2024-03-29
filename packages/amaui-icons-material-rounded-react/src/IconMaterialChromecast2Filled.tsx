import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromecast2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chromecast2Filled'

      short_name='Chromecast2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-2.925 0-4.963-2.038Q2 16.925 2 14q0-2.65 1.713-4.6Q5.425 7.45 8 7.075V5.7q0-1.55 1.075-2.625T11.7 2q.85 0 1.612.375.763.375 1.288 1.025l5.15 6.5.575-.475L23.1 12.9l-2.75 2.175L17.6 11.6l.575-.475-5.15-6.5q-.25-.3-.587-.463Q12.1 4 11.7 4q-.725 0-1.212.487Q10 4.975 10 5.7v1.375q2.575.375 4.288 2.325Q16 11.35 16 14q0 2.925-2.037 4.962Q11.925 21 9 21Zm0-2q2.075 0 3.538-1.462Q14 16.075 14 14q0-2.075-1.462-3.538Q11.075 9 9 9q-2.075 0-3.537 1.462Q4 11.925 4 14q0 2.075 1.463 3.538Q6.925 19 9 19Z"/>
    </Icon>
  );
});

IconMaterialChromecast2Filled.displayName = 'AmauiIconMaterialChromecast2Filled';

export default IconMaterialChromecast2Filled;
