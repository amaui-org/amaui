import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderOuterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuterFilled'

      short_name='BorderOuter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h14V5H5Zm2-6v-2h2v2Zm4 4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm4 4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderOuterFilled.displayName = 'AmauiIconMaterialBorderOuterFilled';

export default IconMaterialBorderOuterFilled;
