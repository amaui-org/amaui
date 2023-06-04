import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertPageBreakW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreakW100'

      short_name='InsertPageBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7v-4.35H6V20h12v-3.65h.7v4.35Zm0-9.05V3.3h9.35l4.05 4.05v4.3H18V7.7h-3.7V4H6v7.65Zm3.95 2.7v-.7h5.5v.7Zm7.5 0v-.7h5.5v.7Zm-15 0v-.7h5.5v.7ZM12 11.65Zm0 4.7Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreakW100.displayName = 'AmauiIconMaterialInsertPageBreakW100';

export default IconMaterialInsertPageBreakW100;
