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
      <path d="M8.15 18.85v-13h-5v-.7h10.7v.7h-5v13Zm9 0v-8h-3v-.7h6.7v.7h-3v8Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsW100Filled.displayName = 'AmauiIconMaterialTextFieldsW100Filled';

export default IconMaterialTextFieldsW100Filled;
