import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExploreOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOffRoundedFilled'
      short_name='ExploreOff'

      {...props}
    >
      <path d="M20.525 21.9Q20.225 22.2 19.8 22.2Q19.375 22.2 19.1 21.9L17.525 20.35Q16.3 21.15 14.9 21.575Q13.5 22 12.025 22Q9.95 22 8.125 21.212Q6.3 20.425 4.95 19.075Q3.6 17.725 2.812 15.9Q2.025 14.075 2.025 12Q2.025 10.525 2.45 9.125Q2.875 7.725 3.675 6.5L2.1 4.925Q1.8 4.625 1.812 4.212Q1.825 3.8 2.125 3.5Q2.4 3.225 2.825 3.225Q3.25 3.225 3.55 3.5L20.525 20.5Q20.825 20.8 20.812 21.212Q20.8 21.625 20.525 21.9ZM20.375 17.5 14.925 12.05 17.075 7.45Q17.2 7.2 17.012 7.012Q16.825 6.825 16.575 6.95L11.975 9.1L6.525 3.65Q7.75 2.85 9.137 2.425Q10.525 2 12.025 2Q14.1 2 15.925 2.787Q17.75 3.575 19.1 4.925Q20.45 6.275 21.238 8.1Q22.025 9.925 22.025 12Q22.025 13.5 21.6 14.887Q21.175 16.275 20.375 17.5ZM7.45 17.075 12.075 14.9 9.075 11.9 6.95 16.575Q6.825 16.825 7.013 17.012Q7.2 17.2 7.45 17.075Z"/>
    </Icon>
  );
});

IconMaterialExploreOffRoundedFilled.displayName = 'AmauiIconMaterialExploreOffRoundedFilled';

export default IconMaterialExploreOffRoundedFilled;
