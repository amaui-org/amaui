import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUsbOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbOffFilled'

      short_name='UsbOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 13.15 16H13v2.3q.475.25.738.7.262.45.262 1 0 .825-.587 1.413Q12.825 22 12 22q-.825 0-1.412-.587Q10 20.825 10 20q0-.525.275-.975.275-.45.725-.725V16H8q-.825 0-1.412-.588Q6 14.825 6 14v-2.3q-.45-.225-.725-.675Q5 10.575 5 10q0-.45.175-.825.175-.375.5-.65l-4.3-4.3L2.8 2.8l18.4 18.4Zm-2-7.7L16 13.15V12h-1V8h4v4h-1v2q0 .25-.05.488-.05.237-.175.437ZM8 14h3v-.15l-2.525-2.525q-.1.125-.225.212-.125.088-.25.163V14Zm5-3.85-2-2V6H9l3-4 3 4h-2Z"/>
    </Icon>
  );
});

IconMaterialUsbOffFilled.displayName = 'AmauiIconMaterialUsbOffFilled';

export default IconMaterialUsbOffFilled;
