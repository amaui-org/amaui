import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovingBedsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingBedsW100'

      short_name='MovingBeds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.6 20.7V3.3H14v17.4Zm.7-8.525q.375-.425.888-.65Q5.7 11.3 6.3 11.3h5q.6 0 1.113.225.512.225.887.65V4h-9ZM8.8 9q-.575 0-.962-.387-.388-.388-.388-.963t.388-.962Q8.225 6.3 8.8 6.3t.962.388q.388.387.388.962t-.388.963Q9.375 9 8.8 9Zm10.05 5.575-.5-.475 1.75-1.75H16v-.7h4.1L18.35 9.9l.5-.475L21.425 12ZM4.3 20h9v-6q0-.825-.587-1.413Q12.125 12 11.3 12h-5q-.825 0-1.412.587Q4.3 13.175 4.3 14Zm4.15-1.65h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2ZM4.3 20h9Z"/>
    </Icon>
  );
});

IconMaterialMovingBedsW100.displayName = 'AmauiIconMaterialMovingBedsW100';

export default IconMaterialMovingBedsW100;
