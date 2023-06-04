import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveUp'

      short_name='TextSelectMoveUp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936v-80h720v80H120Zm320-160V529l-64 63-56-56 160-160 160 160-56 56-64-63v247h-80ZM120 296v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveUp.displayName = 'AmauiIconMaterialTextSelectMoveUp';

export default IconMaterialTextSelectMoveUp;
