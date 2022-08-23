import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesOtherSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOtherSharp'
      short_name='DevicesOther'

      {...props}
    >
      <path d="M7 20H2V4H20V6H4V18H7ZM9 20V18.2Q8.55 17.775 8.275 17.225Q8 16.675 8 16Q8 15.325 8.275 14.775Q8.55 14.225 9 13.8V12H13V13.8Q13.45 14.225 13.725 14.775Q14 15.325 14 16Q14 16.675 13.725 17.225Q13.45 17.775 13 18.2V20ZM11 17.5Q11.65 17.5 12.075 17.075Q12.5 16.65 12.5 16Q12.5 15.35 12.075 14.925Q11.65 14.5 11 14.5Q10.35 14.5 9.925 14.925Q9.5 15.35 9.5 16Q9.5 16.65 9.925 17.075Q10.35 17.5 11 17.5ZM15 20V9H22V20ZM17 18H20V11H17Z"/>
    </Icon>
  );
});

IconMaterialDevicesOtherSharp.displayName = 'AmauiIconMaterialDevicesOtherSharp';

export default IconMaterialDevicesOtherSharp;
