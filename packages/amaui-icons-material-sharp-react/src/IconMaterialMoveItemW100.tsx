import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveItemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveItemW100'

      short_name='MoveItem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M364-466v-28h472l-90-90 20-20 124 124-124 124-20-20 90-90H364ZM190-172v-616h456v174h-28v-146H218v560h400v-146h28v174H190Z"/>
    </Icon>
  );
});

IconMaterialMoveItemW100.displayName = 'AmauiIconMaterialMoveItemW100';

export default IconMaterialMoveItemW100;
