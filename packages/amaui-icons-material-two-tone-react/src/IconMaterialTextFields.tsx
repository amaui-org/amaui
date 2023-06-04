import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFields = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFields'

      short_name='TextFields'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z"/>
    </Icon>
  );
});

IconMaterialTextFields.displayName = 'AmauiIconMaterialTextFields';

export default IconMaterialTextFields;
