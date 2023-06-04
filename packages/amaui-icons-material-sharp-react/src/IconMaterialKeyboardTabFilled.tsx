import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardTabFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabFilled'

      short_name='KeyboardTab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 18-1.425-1.4 3.6-3.6H2v-2h12.175L10.6 7.4 12 6l6 6Zm8 0V6h2v12Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabFilled.displayName = 'AmauiIconMaterialKeyboardTabFilled';

export default IconMaterialKeyboardTabFilled;
