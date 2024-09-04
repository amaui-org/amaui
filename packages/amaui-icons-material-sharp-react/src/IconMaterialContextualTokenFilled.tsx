import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContextualTokenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualTokenFilled'

      short_name='ContextualToken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h280v-120H240v120Zm360 0h120v-320H600v320ZM240-520h280v-120H240v120ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialContextualTokenFilled.displayName = 'AmauiIconMaterialContextualTokenFilled';

export default IconMaterialContextualTokenFilled;
