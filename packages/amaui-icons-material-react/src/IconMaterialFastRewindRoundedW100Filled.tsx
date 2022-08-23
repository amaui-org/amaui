import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastRewindRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindRoundedW100Filled'
      short_name='FastRewind'

      {...props}
    >
      <path d="M18.25 15.425 14.05 12.625Q13.725 12.4 13.725 12Q13.725 11.6 14.05 11.375L18.25 8.575Q18.625 8.3 19.025 8.525Q19.425 8.75 19.425 9.2V14.8Q19.425 15.25 19.025 15.475Q18.625 15.7 18.25 15.425ZM9.7 15.425 5.5 12.625Q5.175 12.4 5.175 12Q5.175 11.6 5.5 11.375L9.7 8.575Q10.075 8.3 10.475 8.525Q10.875 8.75 10.875 9.2V14.8Q10.875 15.25 10.475 15.475Q10.075 15.7 9.7 15.425Z"/>
    </Icon>
  );
});

IconMaterialFastRewindRoundedW100Filled.displayName = 'AmauiIconMaterialFastRewindRoundedW100Filled';

export default IconMaterialFastRewindRoundedW100Filled;
