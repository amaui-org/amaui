import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFieldsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsTwoTone'
      short_name='TextFields'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z"/>
    </Icon>
  );
});

IconMaterialTextFieldsTwoTone.displayName = 'AmauiIconMaterialTextFieldsTwoTone';

export default IconMaterialTextFieldsTwoTone;
