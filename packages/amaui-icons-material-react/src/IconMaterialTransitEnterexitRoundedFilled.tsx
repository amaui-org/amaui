import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransitEnterexitRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitRoundedFilled'
      short_name='TransitEnterexit'

      {...props}
    >
      <path d="M7.5 18Q6.875 18 6.438 17.562Q6 17.125 6 16.5V9.5Q6 8.875 6.438 8.438Q6.875 8 7.5 8Q8.125 8 8.562 8.438Q9 8.875 9 9.5V12.75L14.725 7.025Q15.175 6.575 15.8 6.575Q16.425 6.575 16.9 7.05Q17.35 7.5 17.35 8.15Q17.35 8.8 16.9 9.25L11.15 15H14.5Q15.125 15 15.562 15.438Q16 15.875 16 16.5Q16 17.125 15.562 17.562Q15.125 18 14.5 18Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitRoundedFilled.displayName = 'AmauiIconMaterialTransitEnterexitRoundedFilled';

export default IconMaterialTransitEnterexitRoundedFilled;
