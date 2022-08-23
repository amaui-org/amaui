import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsCricketRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricketRoundedFilled'
      short_name='SportsCricket'

      {...props}
    >
      <path d="M15 14.2 12.2 17Q11.9 17.3 11.5 17.3Q11.1 17.3 10.8 17L2.3 8.5Q2 8.2 2 7.825Q2 7.45 2.3 7.15L5.1 4.35Q5.4 4.05 5.825 4.05Q6.25 4.05 6.55 4.35L15 12.8Q15.3 13.1 15.3 13.5Q15.3 13.9 15 14.2ZM17.9 21.3 14.35 17.75 15.75 16.35 19.325 19.925Q19.6 20.2 19.6 20.6Q19.6 21 19.3 21.3Q19.025 21.575 18.6 21.575Q18.175 21.575 17.9 21.3ZM18.5 9Q17.05 9 16.025 7.975Q15 6.95 15 5.5Q15 4.05 16.025 3.025Q17.05 2 18.5 2Q19.95 2 20.975 3.025Q22 4.05 22 5.5Q22 6.95 20.975 7.975Q19.95 9 18.5 9Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketRoundedFilled.displayName = 'AmauiIconMaterialSportsCricketRoundedFilled';

export default IconMaterialSportsCricketRoundedFilled;
