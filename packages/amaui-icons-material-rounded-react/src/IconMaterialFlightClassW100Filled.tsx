import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightClassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassW100Filled'

      short_name='FlightClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.675 11.7q-.575 0-.962-.388-.388-.387-.388-.962v-3.7q0-.575.388-.962.387-.388.962-.388h.675q.575 0 .962.388.388.387.388.962v3.7q0 .575-.388.962-.387.388-.962.388Zm-5 5q-.3 0-.55-.175-.25-.175-.35-.45L6.375 8.3q-.05-.125-.063-.225-.012-.1-.012-.225v-2.2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V8q0 .075.025.125l2.3 7.325q.075.25.288.4.212.15.487.15h6.925q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM9 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T9 19h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFlightClassW100Filled.displayName = 'AmauiIconMaterialFlightClassW100Filled';

export default IconMaterialFlightClassW100Filled;
