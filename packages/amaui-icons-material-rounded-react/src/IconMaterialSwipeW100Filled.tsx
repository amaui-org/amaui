import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeW100Filled'

      short_name='Swipe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.55 6.2q-.325 0-.537-.213Q2.8 5.775 2.8 5.45v-3.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V4.9q1.8-1.5 3.975-2.35Q9.65 1.7 12 1.7q2.35 0 4.525.837Q18.7 3.375 20.5 4.9V2.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.1q0 .325-.212.537-.213.213-.538.213h-3.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.8q-1.775-1.4-3.825-2.25Q14.275 2.4 12 2.4q-2.275 0-4.325.85-2.05.85-3.825 2.25h2.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7 15.5q-.15 0-.288-.063-.137-.062-.262-.187L6.2 17.7q-.175-.175-.187-.412-.013-.238.112-.463.1-.175.313-.238.212-.062.412-.012l3.45.675V7.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .188.025.087.025.162.075l3.05 1.5q.725.375 1.038 1.15.312.775.162 1.6l-.7 4q-.05.25-.237.4-.188.15-.463.15Z"/>
    </Icon>
  );
});

IconMaterialSwipeW100Filled.displayName = 'AmauiIconMaterialSwipeW100Filled';

export default IconMaterialSwipeW100Filled;
