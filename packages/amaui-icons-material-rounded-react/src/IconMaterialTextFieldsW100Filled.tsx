import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFieldsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsW100Filled'

      short_name='TextFields'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 18.85q-.15 0-.25-.1t-.1-.25V5.85H3.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.85V18.5q0 .15-.1.25t-.25.1Zm9 0q-.15 0-.25-.1t-.1-.25v-7.65H14.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65v7.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsW100Filled.displayName = 'AmauiIconMaterialTextFieldsW100Filled';

export default IconMaterialTextFieldsW100Filled;
