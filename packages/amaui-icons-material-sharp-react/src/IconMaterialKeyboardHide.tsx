import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardHide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHide'

      short_name='KeyboardHide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V3h20v14Zm2-2V5v10Zm7-7h2V6h-2Zm0 3h2V9h-2ZM8 8h2V6H8Zm0 3h2V9H8Zm-3 0h2V9H5Zm0-3h2V6H5Zm3 6h8v-2H8Zm6-3h2V9h-2Zm0-3h2V6h-2Zm3 3h2V9h-2Zm0-3h2V6h-2Zm-5 15-4-4h8Zm-8-8h16V5H4Z"/>
    </Icon>
  );
});

IconMaterialKeyboardHide.displayName = 'AmauiIconMaterialKeyboardHide';

export default IconMaterialKeyboardHide;
