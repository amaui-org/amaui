import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextOverflowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextOverflowW100'

      short_name='FormatTextOverflow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.975 19.35q-.15 0-.25-.1t-.1-.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v14q0 .15-.1.25t-.25.1Zm6.5-10.7q-.15 0-.25-.1t-.1-.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.3q0 .15-.1.25t-.25.1ZM16 14.375q-.1.1-.225.1t-.25-.1q-.1-.125-.1-.262 0-.138.1-.238l1.525-1.525H9.675q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7.375l-1.525-1.525q-.1-.1-.1-.238 0-.137.1-.262t.237-.125q.138 0 .238.125l1.85 1.85q.225.225.225.525 0 .3-.225.525Zm-3.525 4.975q-.15 0-.25-.1t-.1-.25v-3.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V19q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatTextOverflowW100.displayName = 'AmauiIconMaterialFormatTextOverflowW100';

export default IconMaterialFormatTextOverflowW100;
