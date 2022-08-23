import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestSunblockRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestSunblockRoundedW100Filled'
      short_name='NestSunblock'

      {...props}
    >
      <path d="M3 7.05q-.15 0-.25-.1t-.1-.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.7q0 .15-.1.25t-.25.1Zm0 12.3q-.15 0-.25-.1t-.1-.25v-1.7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V19q0 .15-.1.25t-.25.1ZM6.5 8.5q-.125-.125-.125-.25T6.5 8l1.2-1.2q.1-.1.238-.112.137-.013.262.112t.125.25q0 .125-.125.25L7 8.5q-.1.1-.237.113-.138.012-.263-.113Zm1.2 8.7L6.5 16q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l1.2 1.2q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125Zm.675-4.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H15.3L13.325 9q-.1-.125-.075-.262.025-.138.15-.238.125-.1.263-.075.137.025.237.15l1.9 2.575q.275.375.075.788-.2.412-.675.412Zm11.5 6q-.35 0-.6-.25t-.25-.6v-11q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v11q0 .35-.25.6t-.6.25Zm-17.15-3v-.7q1.1 0 1.875-.775.775-.775.775-1.875T4.6 10.125q-.775-.775-1.875-.775v-.7q1.4 0 2.375.975.975.975.975 2.375T5.1 14.375q-.975.975-2.375.975Z"/>
    </Icon>
  );
});

IconMaterialNestSunblockRoundedW100Filled.displayName = 'AmauiIconMaterialNestSunblockRoundedW100Filled';

export default IconMaterialNestSunblockRoundedW100Filled;
