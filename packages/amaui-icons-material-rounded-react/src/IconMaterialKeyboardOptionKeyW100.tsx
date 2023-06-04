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
      <path d="M16 6.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-.45 12q-.2 0-.35-.087-.15-.088-.25-.263L8.225 6.35H4q-.15 0-.25-.1T3.65 6q0-.15.1-.25t.25-.1h4.225q.2 0 .35.087.15.088.25.263l6.725 11.65H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOptionKeyW100.displayName = 'AmauiIconMaterialKeyboardOptionKeyW100';

export default IconMaterialKeyboardOptionKeyW100;
