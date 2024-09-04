import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContextualTokenAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualTokenAddFilled'

      short_name='ContextualTokenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-600v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-320h280v-120H240v120Zm0-200h280v-120H240v120ZM80-160v-640h497q-8 18-12.5 38.5T560-720q0 34 10.5 64.5T600-600v280h120v-204q10 2 19.5 3t20.5 1q34 0 64.5-10.5T880-560v400H80Z"/>
    </Icon>
  );
});

IconMaterialContextualTokenAddFilled.displayName = 'AmauiIconMaterialContextualTokenAddFilled';

export default IconMaterialContextualTokenAddFilled;
