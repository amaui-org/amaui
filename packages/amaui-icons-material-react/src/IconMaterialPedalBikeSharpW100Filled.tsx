import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPedalBikeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBikeSharpW100Filled'
      short_name='PedalBike'

      {...props}
    >
      <path d="M5 19.35Q3.15 19.35 1.9 18.1Q0.65 16.85 0.65 15Q0.65 13.2 1.925 11.9Q3.2 10.6 5 10.6Q6.65 10.6 7.925 11.762Q9.2 12.925 9.35 14.65H11.45L9.2 8.35H7.65V7.65H11.35V8.35H9.95L10.75 10.6H17L15.075 5.35H12.65V4.65H15.575L17.75 10.6H19Q20.8 10.6 22.075 11.875Q23.35 13.15 23.35 14.95Q23.35 16.75 22.075 18.025Q20.8 19.3 19 19.3Q17.3 19.3 16.075 18.163Q14.85 17.025 14.65 15.35H9.35Q9.2 17.075 7.913 18.212Q6.625 19.35 5 19.35ZM12.25 14.65H14.65Q14.725 13.925 15.213 12.862Q15.7 11.8 16.65 11.3H11ZM18.4 14.5 19.05 14.25 18 11.45 17.4 11.7ZM5.65 15.35H8.65V14.65H5.65Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeSharpW100Filled.displayName = 'AmauiIconMaterialPedalBikeSharpW100Filled';

export default IconMaterialPedalBikeSharpW100Filled;
