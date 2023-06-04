import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapVert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVert'

      short_name='SwapVert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/>
    </Icon>
  );
});

IconMaterialSwapVert.displayName = 'AmauiIconMaterialSwapVert';

export default IconMaterialSwapVert;
