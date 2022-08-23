import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPedalBikeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBikeSharpFilled'
      short_name='PedalBike'

      {...props}
    >
      <path d="M5 20Q2.875 20 1.438 18.562Q0 17.125 0 15Q0 12.875 1.463 11.438Q2.925 10 5 10Q6.925 10 8.238 11.15Q9.55 12.3 9.9 14H10.55L8.75 9H7V7H12V9H10.9L11.25 10H16.05L14.6 6H12V4H16.025L18.2 9.95H19Q21.075 9.95 22.538 11.412Q24 12.875 24 14.95Q24 17.05 22.55 18.525Q21.1 20 19 20Q17.2 20 15.838 18.875Q14.475 17.75 14.1 16H9.9Q9.55 17.725 8.2 18.863Q6.85 20 5 20ZM12.7 14H14.1Q14.225 13.425 14.438 12.925Q14.65 12.425 15 12H11.95ZM18 15.35 19.9 14.65 18.9 12 17.05 12.7ZM5 16H7.8V14H5Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeSharpFilled.displayName = 'AmauiIconMaterialPedalBikeSharpFilled';

export default IconMaterialPedalBikeSharpFilled;
