import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMerge'

      short_name='CallMerge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.997 20.41l-3.408-3.407 1.4-1.407 3.41 3.408zM5.59 19L7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59z"/>
    </Icon>
  );
});

IconMaterialCallMerge.displayName = 'AmauiIconMaterialCallMerge';

export default IconMaterialCallMerge;
