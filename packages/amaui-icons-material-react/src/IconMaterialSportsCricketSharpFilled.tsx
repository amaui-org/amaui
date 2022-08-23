import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsCricketSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricketSharpFilled'
      short_name='SportsCricket'

      {...props}
    >
      <path d="M11.5 17.7 1.625 7.825 5.825 3.625 15.7 13.5ZM18.6 22 14.35 17.75 15.75 16.35 20 20.6ZM18.5 9Q17.05 9 16.025 7.975Q15 6.95 15 5.5Q15 4.05 16.025 3.025Q17.05 2 18.5 2Q19.95 2 20.975 3.025Q22 4.05 22 5.5Q22 6.95 20.975 7.975Q19.95 9 18.5 9Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketSharpFilled.displayName = 'AmauiIconMaterialSportsCricketSharpFilled';

export default IconMaterialSportsCricketSharpFilled;
