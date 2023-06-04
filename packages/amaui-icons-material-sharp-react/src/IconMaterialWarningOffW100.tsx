import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOffW100'

      short_name='WarningOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 796q-8.5 0-14.25-5.75T460 776q0-8.5 5.75-14.25T480 756q8.5 0 14.25 5.75T500 776q0 8.5-5.75 14.25T480 796Zm-14-80V562l28 28v126h-28Zm266-1-76-76-175.788-303L433 416l-20-20 67-116 252 435ZM178 856h542L377 513 178 856Zm631 89-61-61H130l227-391-247-247 20-20 699 699-20 20ZM549 685Zm-4-157Z"/>
    </Icon>
  );
});

IconMaterialWarningOffW100.displayName = 'AmauiIconMaterialWarningOffW100';

export default IconMaterialWarningOffW100;
