import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPenSize2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize2W100Filled'

      short_name='PenSize2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M223 833q-7-7-7-17.2t7-16.8l481-480q7-7 16-7.5t16.826 7.326Q744 326 744 336.2t-7 16.8L257 833q-6.6 7-16.8 7-10.2 0-17.2-7Z"/>
    </Icon>
  );
});

IconMaterialPenSize2W100Filled.displayName = 'AmauiIconMaterialPenSize2W100Filled';

export default IconMaterialPenSize2W100Filled;
