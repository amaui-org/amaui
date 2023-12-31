import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdGroup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroup'

      short_name='AdGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h480v-400H320v400Zm-80 80v-640h640v640H240ZM80-80v-640h80v560h560v80H80Zm240-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAdGroup.displayName = 'AmauiIconMaterialAdGroup';

export default IconMaterialAdGroup;
