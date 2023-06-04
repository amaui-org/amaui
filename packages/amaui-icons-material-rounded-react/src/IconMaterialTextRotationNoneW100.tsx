import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationNoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationNoneW100'

      short_name='TextRotationNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.3 20.3q-.125-.125-.125-.25t.125-.25l1.45-1.45H5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h13.75L17.3 16.2q-.1-.1-.112-.237-.013-.138.112-.263t.25-.125q.125 0 .25.125l1.775 1.775q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L17.8 20.3q-.1.1-.238.113-.137.012-.262-.113Zm-8.95-6.75q-.225 0-.313-.138-.087-.137-.012-.337l3.525-9.3q.05-.125.188-.225.137-.1.287-.1.15 0 .287.1.138.1.188.225l3.45 9.3q.075.2-.025.337-.1.138-.325.138-.1 0-.175-.05-.075-.05-.125-.15l-.975-2.65h-4.7l-.975 2.65q-.05.1-.125.15-.075.05-.175.05Zm1.525-3.5h4.2l-2-5.5h-.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotationNoneW100.displayName = 'AmauiIconMaterialTextRotationNoneW100';

export default IconMaterialTextRotationNoneW100;
