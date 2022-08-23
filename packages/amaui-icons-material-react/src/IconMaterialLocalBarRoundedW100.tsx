import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalBarRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarRoundedW100'
      short_name='LocalBar'

      {...props}
    >
      <path d="M7.65 20.35Q7.5 20.35 7.4 20.25Q7.3 20.15 7.3 20Q7.3 19.85 7.4 19.75Q7.5 19.65 7.65 19.65H11.65V12.75L4.9 5.15Q4.85 5.1 4.8 4.987Q4.75 4.875 4.75 4.775Q4.75 4.575 4.888 4.437Q5.025 4.3 5.225 4.3H18.775Q18.975 4.3 19.113 4.45Q19.25 4.6 19.25 4.8Q19.25 4.9 19.2 5Q19.15 5.1 19.1 5.15L12.35 12.75V19.65H16.35Q16.5 19.65 16.6 19.75Q16.7 19.85 16.7 20Q16.7 20.15 16.6 20.25Q16.5 20.35 16.35 20.35ZM7.45 7H16.55L18.35 5H5.65ZM12 12.1 15.925 7.7H8.075ZM12 12.1Z"/>
    </Icon>
  );
});

IconMaterialLocalBarRoundedW100.displayName = 'AmauiIconMaterialLocalBarRoundedW100';

export default IconMaterialLocalBarRoundedW100;
