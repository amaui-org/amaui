import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardFilled'

      short_name='Keyboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19V5h20v14Zm9-9h2V8h-2Zm0 3h2v-2h-2Zm-3-3h2V8H8Zm0 3h2v-2H8Zm-3 0h2v-2H5Zm0-3h2V8H5Zm3 6h8v-2H8Zm6-3h2v-2h-2Zm0-3h2V8h-2Zm3 3h2v-2h-2Zm0-3h2V8h-2Z"/>
    </Icon>
  );
});

IconMaterialKeyboardFilled.displayName = 'AmauiIconMaterialKeyboardFilled';

export default IconMaterialKeyboardFilled;
