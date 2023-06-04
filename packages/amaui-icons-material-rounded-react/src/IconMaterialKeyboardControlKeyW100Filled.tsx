import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardControlKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardControlKeyW100Filled'

      short_name='KeyboardControlKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.175 12.225q-.1-.1-.1-.237 0-.138.1-.238l5.3-5.3q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l5.325 5.325q.1.1.088.237-.013.138-.113.238-.1.1-.225.1t-.225-.1L12 6.9l-5.375 5.35q-.1.1-.225.087-.125-.012-.225-.112Z"/>
    </Icon>
  );
});

IconMaterialKeyboardControlKeyW100Filled.displayName = 'AmauiIconMaterialKeyboardControlKeyW100Filled';

export default IconMaterialKeyboardControlKeyW100Filled;
