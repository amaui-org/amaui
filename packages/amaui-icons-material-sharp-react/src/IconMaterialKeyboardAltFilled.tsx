import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltFilled'

      short_name='KeyboardAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21V4h22v17Zm8-11h2V8H9Zm-4 0h2V8H5Zm3 7h8v-1H8Zm5-7h2V8h-2Zm-4 4h2v-2H9Zm-4 0h2v-2H5Zm8 0h2v-2h-2Zm4-4h2V8h-2Zm0 4h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAltFilled.displayName = 'AmauiIconMaterialKeyboardAltFilled';

export default IconMaterialKeyboardAltFilled;
