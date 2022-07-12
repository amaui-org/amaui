import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerifiedOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedOutlinedW100Filled'
      short_name='Verified'

      {...props}
    >
      <path d="M9.15 20.85 7.55 18.15 4.5 17.5 4.8 14.35 2.75 12 4.8 9.65 4.5 6.5 7.55 5.85 9.15 3.15 12 4.35 14.85 3.15 16.45 5.85 19.5 6.5 19.2 9.65 21.25 12 19.2 14.35 19.5 17.5 16.45 18.15 14.85 20.85 12 19.65ZM10.95 14.65 15.7 9.9 15.2 9.4 10.95 13.65 8.8 11.5 8.3 12Z"/>
    </Icon>
  )
});

export default IconMaterialVerifiedOutlinedW100Filled;
