import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness3SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3SharpFilled'
      short_name='Brightness3'

      {...props}
    >
      <path d="M9 22Q8.2 22 7.463 21.887Q6.725 21.775 6 21.55Q9.15 20.525 11.075 17.9Q13 15.275 13 12Q13 8.725 11.075 6.1Q9.15 3.475 6 2.45Q6.725 2.225 7.463 2.112Q8.2 2 9 2Q11.075 2 12.9 2.787Q14.725 3.575 16.075 4.925Q17.425 6.275 18.212 8.1Q19 9.925 19 12Q19 14.075 18.212 15.9Q17.425 17.725 16.075 19.075Q14.725 20.425 12.9 21.212Q11.075 22 9 22Z"/>
    </Icon>
  );
});

IconMaterialBrightness3SharpFilled.displayName = 'AmauiIconMaterialBrightness3SharpFilled';

export default IconMaterialBrightness3SharpFilled;
