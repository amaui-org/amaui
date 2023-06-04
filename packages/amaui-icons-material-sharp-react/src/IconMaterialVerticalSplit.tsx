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
      <path d="M3 13v2h8v-2Zm0 4v2h8v-2Zm0-8v2h8V9Zm0-4v2h8V5Zm12 2v10Zm-2-2h8v14h-8Zm2 2v10h4V7Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplit.displayName = 'AmauiIconMaterialVerticalSplit';

export default IconMaterialVerticalSplit;
