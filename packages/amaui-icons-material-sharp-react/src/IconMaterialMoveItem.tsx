import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveItem = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveItem'

      short_name='MoveItem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-440v-80h486l-62-62 56-58 160 160-160 160-56-58 62-62H320ZM120-120v-720h560v240h-80v-160H200v560h400v-160h80v240H120Z"/>
    </Icon>
  );
});

IconMaterialMoveItem.displayName = 'AmauiIconMaterialMoveItem';

export default IconMaterialMoveItem;
