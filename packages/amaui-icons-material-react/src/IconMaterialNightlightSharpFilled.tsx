import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlightSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightSharpFilled'
      short_name='Nightlight'

      {...props}
    >
      <path d="M14 22Q11.95 22 10.125 21.212Q8.3 20.425 6.938 19.062Q5.575 17.7 4.787 15.875Q4 14.05 4 12Q4 9.925 4.787 8.113Q5.575 6.3 6.938 4.938Q8.3 3.575 10.125 2.787Q11.95 2 14 2Q15.35 2 16.625 2.35Q17.9 2.7 19 3.35Q16.725 4.675 15.363 6.937Q14 9.2 14 12Q14 14.8 15.363 17.062Q16.725 19.325 19 20.65Q17.9 21.3 16.625 21.65Q15.35 22 14 22Z"/>
    </Icon>
  );
});

IconMaterialNightlightSharpFilled.displayName = 'AmauiIconMaterialNightlightSharpFilled';

export default IconMaterialNightlightSharpFilled;
