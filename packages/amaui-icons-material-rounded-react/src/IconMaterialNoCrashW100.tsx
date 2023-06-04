import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoCrashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrashW100'

      short_name='NoCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 4.475 3.3-3.325q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25L12.525 4.9q-.225.225-.525.225-.3 0-.525-.225l-1.15-1.125q-.1-.1-.1-.238 0-.137.1-.237.1-.1.25-.1t.25.1ZM4.65 22.7q-.15 0-.25-.1t-.1-.25V15.2l1.95-5.55q.05-.175.2-.263.15-.087.35-.087h10.5q.15 0 .275.1.125.1.175.25l1.95 5.55v7.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V20.7H5v1.65q0 .15-.1.25t-.25.1Zm.65-8.2h13.4L17.1 10H6.9ZM5 20v-4.8V20Zm2.4-1.4q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q7.825 16.6 7.4 16.6t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288ZM5 20h14v-4.8H5Z"/>
    </Icon>
  );
});

IconMaterialNoCrashW100.displayName = 'AmauiIconMaterialNoCrashW100';

export default IconMaterialNoCrashW100;
