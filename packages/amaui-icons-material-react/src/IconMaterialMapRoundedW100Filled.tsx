import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapRoundedW100Filled'
      short_name='Map'

      {...props}
    >
      <path d="M14.525 19.425 9 17.5 5.25 18.95Q4.9 19.075 4.6 18.875Q4.3 18.675 4.3 18.3V6.6Q4.3 6.35 4.412 6.137Q4.525 5.925 4.75 5.85L8.5 4.575Q8.75 4.5 9 4.5Q9.25 4.5 9.5 4.575L15 6.5L18.75 5.05Q19.1 4.925 19.4 5.088Q19.7 5.25 19.7 5.6V17.5Q19.7 17.775 19.55 17.975Q19.4 18.175 19.15 18.25L15.475 19.45Q15.25 19.525 15 19.512Q14.75 19.5 14.525 19.425ZM14.65 18.75V7.05L9.35 5.2V16.9Z"/>
    </Icon>
  );
});

IconMaterialMapRoundedW100Filled.displayName = 'AmauiIconMaterialMapRoundedW100Filled';

export default IconMaterialMapRoundedW100Filled;
