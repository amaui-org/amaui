import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFieldsAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsAlt'

      short_name='TextFieldsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h800v80H80Zm680-160v-560h60v560h-60Zm-600 0 210-560h100l210 560h-96l-50-144H308l-52 144h-96Zm176-224h168l-82-232h-4l-82 232Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsAlt.displayName = 'AmauiIconMaterialTextFieldsAlt';

export default IconMaterialTextFieldsAlt;
