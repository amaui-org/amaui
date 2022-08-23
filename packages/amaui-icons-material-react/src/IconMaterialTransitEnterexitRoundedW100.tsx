import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransitEnterexitRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexitRoundedW100'
      short_name='TransitEnterexit'

      {...props}
    >
      <path d="M8.1 17.2Q7.625 17.2 7.287 16.862Q6.95 16.525 6.95 16.05V9.5Q6.95 9.225 7.162 9.012Q7.375 8.8 7.65 8.8Q7.925 8.8 8.137 9.012Q8.35 9.225 8.35 9.5V14.8L15.575 7.575Q15.775 7.375 16.062 7.387Q16.35 7.4 16.55 7.6Q16.75 7.8 16.75 8.1Q16.75 8.4 16.55 8.6L9.35 15.8H14.65Q14.925 15.8 15.138 16.012Q15.35 16.225 15.35 16.5Q15.35 16.775 15.138 16.987Q14.925 17.2 14.65 17.2Z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexitRoundedW100.displayName = 'AmauiIconMaterialTransitEnterexitRoundedW100';

export default IconMaterialTransitEnterexitRoundedW100;
