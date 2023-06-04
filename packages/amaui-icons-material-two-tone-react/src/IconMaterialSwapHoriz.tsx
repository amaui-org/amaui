import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapHoriz = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHoriz'

      short_name='SwapHoriz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
    </Icon>
  );
});

IconMaterialSwapHoriz.displayName = 'AmauiIconMaterialSwapHoriz';

export default IconMaterialSwapHoriz;
