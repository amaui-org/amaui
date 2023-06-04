import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Keyboard'

      short_name='Keyboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17h16V7H4Zm-2 2V5h20v14Zm9-9h2V8h-2Zm0 3h2v-2h-2Zm-3-3h2V8H8Zm0 3h2v-2H8Zm-3 0h2v-2H5Zm0-3h2V8H5Zm3 6h8v-2H8Zm6-3h2v-2h-2Zm0-3h2V8h-2Zm3 3h2v-2h-2Zm0-3h2V8h-2ZM4 17V7v10Z"/>
    </Icon>
  );
});

IconMaterialKeyboard.displayName = 'AmauiIconMaterialKeyboard';

export default IconMaterialKeyboard;
