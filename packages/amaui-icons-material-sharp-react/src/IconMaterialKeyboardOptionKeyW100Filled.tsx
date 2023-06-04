import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOptionKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOptionKeyW100Filled'

      short_name='KeyboardOptionKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.15 18.35-6.925-12H3.65v-.7h4.975l6.925 12h4.8v.7Zm.5-12v-.7h4.7v.7Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOptionKeyW100Filled.displayName = 'AmauiIconMaterialKeyboardOptionKeyW100Filled';

export default IconMaterialKeyboardOptionKeyW100Filled;
