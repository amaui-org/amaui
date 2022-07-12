import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerifiedOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedOutlinedFilled'
      short_name='Verified'

      {...props}
    >
      <path d="M8.6 22.5 6.7 19.3 3.1 18.5 3.45 14.8 1 12 3.45 9.2 3.1 5.5 6.7 4.7 8.6 1.5 12 2.95 15.4 1.5 17.3 4.7 20.9 5.5 20.55 9.2 23 12 20.55 14.8 20.9 18.5 17.3 19.3 15.4 22.5 12 21.05ZM10.95 15.55 16.6 9.9 15.2 8.45 10.95 12.7 8.8 10.6 7.4 12Z"/>
    </Icon>
  )
});

export default IconMaterialVerifiedOutlinedFilled;
