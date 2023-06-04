import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltW100'

      short_name='KeyboardAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 19.7q-.65 0-1.075-.425Q2.3 18.85 2.3 18.2V6.8q0-.65.425-1.075Q3.15 5.3 3.8 5.3h16.4q.65 0 1.075.425.425.425.425 1.075v11.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h16.4q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q20.5 6 20.2 6H3.8q-.3 0-.55.25Q3 6.5 3 6.8v11.4q0 .3.25.55.25.25.55.25Zm5.5-9.3h1.4V8.3H9.3Zm-4 0h1.4V8.3H5.3Zm3.2 7.15h7q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm4.8-7.15h1.4V8.3h-1.4Zm-4 4h1.4v-1.4H9.3Zm-4 0h1.4v-1.4H5.3Zm8 0h1.4v-1.4h-1.4Zm4-4h1.4V8.3h-1.4Zm0 4h1.4v-1.4h-1.4ZM3 19V6 19Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAltW100.displayName = 'AmauiIconMaterialKeyboardAltW100';

export default IconMaterialKeyboardAltW100;
