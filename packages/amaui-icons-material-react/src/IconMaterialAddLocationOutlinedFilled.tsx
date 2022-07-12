import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLocationOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationOutlinedFilled'
      short_name='AddLocation'

      {...props}
    >
      <path d="M11 14H13V11H16V9H13V6H11V9H8V11H11ZM12 22Q7.975 18.575 5.988 15.637Q4 12.7 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 12.7 18.013 15.637Q16.025 18.575 12 22Z"/>
    </Icon>
  )
});

export default IconMaterialAddLocationOutlinedFilled;
