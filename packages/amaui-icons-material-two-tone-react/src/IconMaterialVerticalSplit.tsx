import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalSplit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplit'

      short_name='VerticalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 7h4v10h-4z" opacity=".3"/><path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5h-8zm6 12h-4V7h4v10z"/>
    </Icon>
  );
});

IconMaterialVerticalSplit.displayName = 'AmauiIconMaterialVerticalSplit';

export default IconMaterialVerticalSplit;
