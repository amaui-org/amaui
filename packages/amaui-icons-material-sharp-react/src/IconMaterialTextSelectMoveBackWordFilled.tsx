import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveBackWordFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveBackWordFilled'

      short_name='TextSelectMoveBackWord'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120 296v-80h80v80h-80Zm0 640v-80h80v80h-80Zm160-200L120 576l160-160 56 56-63 64h247v80H273l63 64-56 56Zm320 200V216h240v720H600Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveBackWordFilled.displayName = 'AmauiIconMaterialTextSelectMoveBackWordFilled';

export default IconMaterialTextSelectMoveBackWordFilled;
