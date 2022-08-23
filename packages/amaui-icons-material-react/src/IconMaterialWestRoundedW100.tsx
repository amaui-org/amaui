import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWestRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestRoundedW100'
      short_name='West'

      {...props}
    >
      <path d="M8.95 17.925 3.575 12.55Q3.45 12.425 3.4 12.287Q3.35 12.15 3.35 12Q3.35 11.85 3.4 11.725Q3.45 11.6 3.575 11.475L8.95 6.075Q9.05 5.975 9.188 5.975Q9.325 5.975 9.45 6.075Q9.575 6.175 9.562 6.325Q9.55 6.475 9.45 6.575L4.375 11.65H20.125Q20.275 11.65 20.375 11.75Q20.475 11.85 20.475 12Q20.475 12.15 20.375 12.25Q20.275 12.35 20.125 12.35H4.375L9.45 17.425Q9.575 17.55 9.575 17.688Q9.575 17.825 9.45 17.925Q9.35 18.025 9.2 18.025Q9.05 18.025 8.95 17.925Z"/>
    </Icon>
  );
});

IconMaterialWestRoundedW100.displayName = 'AmauiIconMaterialWestRoundedW100';

export default IconMaterialWestRoundedW100;
