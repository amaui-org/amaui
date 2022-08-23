import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlightRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightRoundedFilled'
      short_name='Nightlight'

      {...props}
    >
      <path d="M14 22Q11.95 22 10.125 21.212Q8.3 20.425 6.938 19.062Q5.575 17.7 4.787 15.875Q4 14.05 4 12Q4 9.925 4.787 8.113Q5.575 6.3 6.938 4.938Q8.3 3.575 10.125 2.787Q11.95 2 14 2Q15.1 2 16.125 2.237Q17.15 2.475 18.1 2.9Q18.45 3.075 18.475 3.362Q18.5 3.65 18.15 3.9Q16.25 5.275 15.125 7.375Q14 9.475 14 12Q14 14.525 15.125 16.625Q16.25 18.725 18.15 20.1Q18.5 20.35 18.475 20.638Q18.45 20.925 18.1 21.1Q17.15 21.525 16.125 21.762Q15.1 22 14 22Z"/>
    </Icon>
  );
});

IconMaterialNightlightRoundedFilled.displayName = 'AmauiIconMaterialNightlightRoundedFilled';

export default IconMaterialNightlightRoundedFilled;
