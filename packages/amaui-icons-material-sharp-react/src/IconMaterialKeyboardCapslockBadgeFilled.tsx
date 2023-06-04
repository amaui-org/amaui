import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockBadgeFilled'

      short_name='KeyboardCapslockBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 776h400v-80H280v80Zm56-160 144-144 144 144 56-56-200-200-200 200 56 56ZM120 936V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockBadgeFilled.displayName = 'AmauiIconMaterialKeyboardCapslockBadgeFilled';

export default IconMaterialKeyboardCapslockBadgeFilled;
