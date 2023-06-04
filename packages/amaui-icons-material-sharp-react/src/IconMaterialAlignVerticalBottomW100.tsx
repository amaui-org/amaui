import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomW100'

      short_name='AlignVerticalBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.05v-.7h17.4v.7Zm4.6-3.45V3.925h1.75V16.6Zm6.45 0V9.925h1.75V16.6Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomW100.displayName = 'AmauiIconMaterialAlignVerticalBottomW100';

export default IconMaterialAlignVerticalBottomW100;
