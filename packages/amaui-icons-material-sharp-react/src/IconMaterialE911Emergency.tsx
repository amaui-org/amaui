import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialE911Emergency = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911Emergency'

      short_name='E911Emergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-2h1.6l1.975-6.575q.2-.65.737-1.038Q9.85 10 10.5 10h3q.65 0 1.188.387.537.388.737 1.038L17.4 18H19v2Zm3.7-2h6.6l-1.8-6h-3ZM11 8V3h2v5Zm5.95 2.475L15.525 9.05l3.55-3.525 1.4 1.4ZM18 15v-2h5v2ZM7.05 10.475l-3.525-3.55 1.4-1.4 3.55 3.525ZM1 15v-2h5v2Z"/>
    </Icon>
  );
});

IconMaterialE911Emergency.displayName = 'AmauiIconMaterialE911Emergency';

export default IconMaterialE911Emergency;
