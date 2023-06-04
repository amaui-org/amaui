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
      <path d="M8 13V5.825L5.425 8.4 4 7l5-5 5 5-1.425 1.4L10 5.825V13Zm7 9-5-5 1.425-1.4L14 18.175V11h2v7.175l2.575-2.575L20 17Z"/>
    </Icon>
  );
});

IconMaterialSwapVert.displayName = 'AmauiIconMaterialSwapVert';

export default IconMaterialSwapVert;
