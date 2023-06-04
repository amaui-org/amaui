import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeFilled'

      short_name='Cake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 13V8h6V6.55q-.45-.3-.725-.725Q10 5.4 10 4.8q0-.375.15-.738.15-.362.45-.662L12 2l1.4 1.4q.3.3.45.662.15.363.15.738 0 .6-.275 1.025-.275.425-.725.725V8h6v5Zm-2 9v-7h18v7Z"/>
    </Icon>
  );
});

IconMaterialCakeFilled.displayName = 'AmauiIconMaterialCakeFilled';

export default IconMaterialCakeFilled;
