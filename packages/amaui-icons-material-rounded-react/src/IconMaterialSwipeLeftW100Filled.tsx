import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftW100Filled'

      short_name='SwipeLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.15 6.6q-.325 0-.537-.213Q2.4 6.175 2.4 5.85v-3.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.625Q4.95 3.5 7.3 2.45 9.65 1.4 12 1.4q3.55 0 5.962 1.45 2.413 1.45 3.288 3.275.1.2 0 .337-.1.138-.325.138-.1 0-.187-.063-.088-.062-.163-.162-.8-1.5-2.975-2.888Q15.425 2.1 12 2.1q-2.35 0-4.4.987-2.05.988-4.075 2.813H6.25q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7.4 15.1q-.15 0-.288-.063-.137-.062-.262-.187L6.2 17.7q-.175-.175-.187-.412-.013-.238.112-.463.1-.175.313-.238.212-.062.412-.012l3.45.675V7.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .188.025.087.025.162.075l3.05 1.5q.725.35 1.038 1.137.312.788.162 1.613l-.7 4q-.05.25-.237.4-.188.15-.463.15Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftW100Filled.displayName = 'AmauiIconMaterialSwipeLeftW100Filled';

export default IconMaterialSwipeLeftW100Filled;
