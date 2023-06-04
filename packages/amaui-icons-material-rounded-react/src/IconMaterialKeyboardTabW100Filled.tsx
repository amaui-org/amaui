import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardTabW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabW100Filled'

      short_name='KeyboardTab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.75 16.85q-.125-.125-.125-.25t.125-.25l4-4H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h13.75l-4-4q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l4.325 4.325q.125.125.175.25.05.125.05.275 0 .125-.05.262-.05.138-.175.263L13.25 16.85q-.125.125-.25.125t-.25-.125Zm8.25.25q-.15 0-.25-.1t-.1-.25v-9.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.5q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabW100Filled.displayName = 'AmauiIconMaterialKeyboardTabW100Filled';

export default IconMaterialKeyboardTabW100Filled;
