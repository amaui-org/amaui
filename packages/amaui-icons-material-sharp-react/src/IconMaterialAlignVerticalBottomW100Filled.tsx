import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomW100Filled'

      short_name='AlignVerticalBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.05v-.7h17.4v.7Zm4.6-3.45V3.925h1.75V16.6Zm6.45 0V9.925h1.75V16.6Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomW100Filled.displayName = 'AmauiIconMaterialAlignVerticalBottomW100Filled';

export default IconMaterialAlignVerticalBottomW100Filled;
