import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatIndentDecreaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentDecreaseW100'

      short_name='FormatIndentDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-6.325-2.575-1.5-1.5Q4.05 12.15 4.05 12q0-.15.125-.275l1.5-1.5q.2-.2.438-.088.237.113.237.388v2.95q0 .275-.237.388-.238.112-.438-.088ZM4 20.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-16q-.15 0-.25-.1T3.65 4q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm8 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentDecreaseW100.displayName = 'AmauiIconMaterialFormatIndentDecreaseW100';

export default IconMaterialFormatIndentDecreaseW100;
