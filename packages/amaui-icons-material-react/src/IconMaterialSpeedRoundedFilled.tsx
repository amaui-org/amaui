import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedRoundedFilled'
      short_name='Speed'

      {...props}
    >
      <path d="M10.45 15.5Q11.05 16.1 12 16.087Q12.95 16.075 13.4 15.4L17.625 9.075Q17.85 8.725 17.562 8.438Q17.275 8.15 16.925 8.375L10.6 12.6Q9.925 13.05 9.888 13.975Q9.85 14.9 10.45 15.5ZM5.1 20Q4.575 20 4.1 19.75Q3.625 19.5 3.35 19.05Q2.7 17.925 2.35 16.663Q2 15.4 2 14Q2 11.925 2.788 10.112Q3.575 8.3 4.938 6.937Q6.3 5.575 8.125 4.787Q9.95 4 12 4Q14.075 4 15.887 4.787Q17.7 5.575 19.062 6.937Q20.425 8.3 21.212 10.112Q22 11.925 22 14Q22 15.4 21.663 16.637Q21.325 17.875 20.65 19.05Q20.375 19.5 19.9 19.75Q19.425 20 18.9 20Z"/>
    </Icon>
  );
});

IconMaterialSpeedRoundedFilled.displayName = 'AmauiIconMaterialSpeedRoundedFilled';

export default IconMaterialSpeedRoundedFilled;
