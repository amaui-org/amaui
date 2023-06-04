import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitFilled'

      short_name='VerticalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 7V5h8v2Zm10 12V5h8v14ZM3 11V9h8v2Zm0 4v-2h8v2Zm0 4v-2h8v2Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplitFilled.displayName = 'AmauiIconMaterialVerticalSplitFilled';

export default IconMaterialVerticalSplitFilled;
