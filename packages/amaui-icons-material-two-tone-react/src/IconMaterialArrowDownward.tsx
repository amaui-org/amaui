import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDownward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownward'

      short_name='ArrowDownward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
    </Icon>
  );
});

IconMaterialArrowDownward.displayName = 'AmauiIconMaterialArrowDownward';

export default IconMaterialArrowDownward;
