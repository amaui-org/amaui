import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatIndentIncreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentIncreaseW100Filled'

      short_name='FormatIndentIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-.35-6.875v-2.95q0-.275.238-.388.237-.112.437.088l1.5 1.5q.125.125.125.275 0 .15-.125.275l-1.5 1.5q-.2.2-.437.088-.238-.113-.238-.388ZM12 16.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-8-12q-.15 0-.25-.1T3.65 4q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm8 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentIncreaseW100Filled.displayName = 'AmauiIconMaterialFormatIndentIncreaseW100Filled';

export default IconMaterialFormatIndentIncreaseW100Filled;
