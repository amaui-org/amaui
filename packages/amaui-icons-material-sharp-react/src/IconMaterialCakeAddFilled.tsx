import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCakeAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeAddFilled'

      short_name='CakeAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-7h18v7Zm2-9V8h6V6.55q-.45-.3-.725-.725Q9 5.4 9 4.8q0-.375.15-.738.15-.362.45-.662L11 2l1.4 1.4q.3.3.45.662.15.363.15.738 0 .6-.275 1.025-.275.425-.725.725V8h6v5Zm15-5V6h-2V4h2V2h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialCakeAddFilled.displayName = 'AmauiIconMaterialCakeAddFilled';

export default IconMaterialCakeAddFilled;
