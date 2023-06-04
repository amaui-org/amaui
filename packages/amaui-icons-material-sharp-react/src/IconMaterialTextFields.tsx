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
      <path d="M7 20V7H2V4h13v3h-5v13Zm9 0v-8h-3V9h9v3h-3v8Z"/>
    </Icon>
  );
});

IconMaterialTextFields.displayName = 'AmauiIconMaterialTextFields';

export default IconMaterialTextFields;
