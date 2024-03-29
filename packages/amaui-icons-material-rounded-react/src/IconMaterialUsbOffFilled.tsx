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
      <path d="M12 22q-.825 0-1.412-.587Q10 20.825 10 20q0-.525.275-.975.275-.45.725-.725V16H8q-.825 0-1.412-.588Q6 14.825 6 14v-2.3q-.45-.225-.725-.675Q5 10.575 5 10q0-.45.175-.825.175-.375.5-.65l-3.6-3.6Q1.8 4.65 1.8 4.237q0-.412.3-.712t.712-.3q.413 0 .713.3L20.5 20.5q.275.275.288.688.012.412-.288.712t-.712.3q-.413 0-.713-.3L13.15 16H13v2.3q.475.25.738.7.262.45.262 1 0 .825-.587 1.413Q12.825 22 12 22Zm5.775-7.075L16 13.15V12h-.5q-.2 0-.35-.15-.15-.15-.15-.35v-3q0-.2.15-.35.15-.15.35-.15h3q.2 0 .35.15.15.15.15.35v3q0 .2-.15.35-.15.15-.35.15H18v2q0 .25-.05.488-.05.237-.175.437ZM8 14h3v-.15l-2.525-2.525q-.1.125-.225.212-.125.088-.25.163V14Zm5-3.85-2-2V6h-1q-.3 0-.45-.275-.15-.275.05-.525l2-2.675q.15-.2.4-.2t.4.2l2 2.675q.2.25.05.525Q14.3 6 14 6h-1Z"/>
    </Icon>
  );
});

IconMaterialUsbOffFilled.displayName = 'AmauiIconMaterialUsbOffFilled';

export default IconMaterialUsbOffFilled;
