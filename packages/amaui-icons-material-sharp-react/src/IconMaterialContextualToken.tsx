import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContextualToken = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualToken'

      short_name='ContextualToken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h280v-120H240v120Zm360 0h120v-320H600v320ZM240-520h280v-120H240v120Zm-80 280h640v-480H160v480Zm-80 80v-640h800v640H80Zm80-80v-480 480Z"/>
    </Icon>
  );
});

IconMaterialContextualToken.displayName = 'AmauiIconMaterialContextualToken';

export default IconMaterialContextualToken;
