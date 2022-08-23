import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEastRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastRoundedW100'
      short_name='East'

      {...props}
    >
      <path d="M14.075 17.925Q13.95 17.825 13.938 17.688Q13.925 17.55 14.05 17.425L19.125 12.35H3.375Q3.225 12.35 3.125 12.25Q3.025 12.15 3.025 12Q3.025 11.85 3.125 11.75Q3.225 11.65 3.375 11.65H19.125L14.05 6.575Q13.95 6.475 13.938 6.325Q13.925 6.175 14.05 6.075Q14.15 5.975 14.3 5.975Q14.45 5.975 14.55 6.075L19.95 11.475Q20.075 11.6 20.113 11.725Q20.15 11.85 20.15 12Q20.15 12.15 20.113 12.287Q20.075 12.425 19.95 12.55L14.55 17.925Q14.45 18.025 14.325 18.025Q14.2 18.025 14.075 17.925Z"/>
    </Icon>
  );
});

IconMaterialEastRoundedW100.displayName = 'AmauiIconMaterialEastRoundedW100';

export default IconMaterialEastRoundedW100;
