import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSharpW100Filled'
      short_name='Settings'

      {...props}
    >
      <path d="M10.4 20.7 10.05 17.9Q9.525 17.75 8.887 17.4Q8.25 17.05 7.825 16.65L5.25 17.75L3.65 14.95L5.875 13.275Q5.825 12.975 5.787 12.65Q5.75 12.325 5.75 12.025Q5.75 11.75 5.787 11.438Q5.825 11.125 5.875 10.725L3.65 9.05L5.25 6.3L7.8 7.375Q8.3 6.95 8.887 6.612Q9.475 6.275 10.025 6.1L10.4 3.3H13.6L13.95 6.125Q14.6 6.35 15.088 6.637Q15.575 6.925 16.1 7.375L18.75 6.3L20.35 9.05L18.025 10.8Q18.125 11.15 18.138 11.438Q18.15 11.725 18.15 12Q18.15 12.25 18.125 12.537Q18.1 12.825 18.025 13.25L20.3 14.95L18.7 17.75L16.1 16.625Q15.575 17.075 15.05 17.387Q14.525 17.7 13.95 17.875L13.6 20.7ZM11.95 14.2Q12.875 14.2 13.512 13.562Q14.15 12.925 14.15 12Q14.15 11.075 13.512 10.438Q12.875 9.8 11.95 9.8Q11.025 9.8 10.387 10.438Q9.75 11.075 9.75 12Q9.75 12.925 10.387 13.562Q11.025 14.2 11.95 14.2Z"/>
    </Icon>
  );
});

IconMaterialSettingsSharpW100Filled.displayName = 'AmauiIconMaterialSettingsSharpW100Filled';

export default IconMaterialSettingsSharpW100Filled;
