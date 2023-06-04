import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUpward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpward'

      short_name='ArrowUpward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
    </Icon>
  );
});

IconMaterialArrowUpward.displayName = 'AmauiIconMaterialArrowUpward';

export default IconMaterialArrowUpward;
