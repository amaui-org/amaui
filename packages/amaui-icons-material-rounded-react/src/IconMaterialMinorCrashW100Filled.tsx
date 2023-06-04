import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinorCrashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinorCrashW100Filled'

      short_name='MinorCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.65 3.9 1.6 1.6q.1.1.1.25t-.1.25q-.1.1-.25.1T7.75 6l-1.6-1.6q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1Zm11.2.5L16.25 6q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25l1.6-1.6q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25Zm-5.5-2.65v3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25ZM4.65 22.7q-.15 0-.25-.1t-.1-.25V15.2l1.95-5.55q.05-.175.2-.263.15-.087.35-.087h10.5q.15 0 .275.1.125.1.175.25l1.95 5.55v7.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V20.7H5v1.65q0 .15-.1.25t-.25.1Zm.65-8.2h13.4L17.1 10H6.9Zm2.1 4.1q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q7.825 16.6 7.4 16.6t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialMinorCrashW100Filled.displayName = 'AmauiIconMaterialMinorCrashW100Filled';

export default IconMaterialMinorCrashW100Filled;
