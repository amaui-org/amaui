import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightW100Filled'

      short_name='SwipeRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.925 6.6q-.225 0-.325-.138-.1-.137 0-.337Q3.475 4.3 5.888 2.85 8.3 1.4 11.85 1.4q2.35 0 4.7 1.05t4.2 2.925V2.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.1q0 .325-.212.537-.213.213-.538.213h-3.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.725Q18.3 4.075 16.25 3.087 14.2 2.1 11.85 2.1q-3.425 0-5.6 1.387-2.175 1.388-2.975 2.888-.05.1-.15.162-.1.063-.2.063Zm7.625 15.1q-.15 0-.288-.063-.137-.062-.262-.187L6.2 17.7q-.175-.175-.187-.412-.013-.238.112-.463.1-.175.313-.238.212-.062.412-.012l3.45.675V7.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .188.025.087.025.162.075l3.05 1.5q.725.35 1.038 1.137.312.788.162 1.613l-.7 4q-.05.25-.237.4-.188.15-.463.15Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightW100Filled.displayName = 'AmauiIconMaterialSwipeRightW100Filled';

export default IconMaterialSwipeRightW100Filled;
