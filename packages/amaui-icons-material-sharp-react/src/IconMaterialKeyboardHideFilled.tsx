import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardHideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHideFilled'

      short_name='KeyboardHide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V3h20v14Zm9-9h2V6h-2Zm0 3h2V9h-2ZM8 8h2V6H8Zm0 3h2V9H8Zm-3 0h2V9H5Zm0-3h2V6H5Zm3 6h8v-2H8Zm6-3h2V9h-2Zm0-3h2V6h-2Zm3 3h2V9h-2Zm0-3h2V6h-2Zm-5 15-4-4h8Z"/>
    </Icon>
  );
});

IconMaterialKeyboardHideFilled.displayName = 'AmauiIconMaterialKeyboardHideFilled';

export default IconMaterialKeyboardHideFilled;
