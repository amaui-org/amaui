import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOptionKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOptionKeyW100'

      short_name='KeyboardOptionKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.15 18.35-6.925-12H3.65v-.7h4.975l6.925 12h4.8v.7Zm.5-12v-.7h4.7v.7Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOptionKeyW100.displayName = 'AmauiIconMaterialKeyboardOptionKeyW100';

export default IconMaterialKeyboardOptionKeyW100;
