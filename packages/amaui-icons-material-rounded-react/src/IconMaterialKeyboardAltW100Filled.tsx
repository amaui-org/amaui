import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltW100Filled'

      short_name='KeyboardAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 19.7q-.65 0-1.075-.425Q2.3 18.85 2.3 18.2V6.8q0-.65.425-1.075Q3.15 5.3 3.8 5.3h16.4q.65 0 1.075.425.425.425.425 1.075v11.4q0 .65-.425 1.075-.425.425-1.075.425Zm5.5-10h1.4V8.3H9.3Zm-4 0h1.4V8.3H5.3Zm3.2 7.15h7q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm4.8-7.15h1.4V8.3h-1.4Zm-4 4h1.4v-1.4H9.3Zm-4 0h1.4v-1.4H5.3Zm8 0h1.4v-1.4h-1.4Zm4-4h1.4V8.3h-1.4Zm0 4h1.4v-1.4h-1.4Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAltW100Filled.displayName = 'AmauiIconMaterialKeyboardAltW100Filled';

export default IconMaterialKeyboardAltW100Filled;
