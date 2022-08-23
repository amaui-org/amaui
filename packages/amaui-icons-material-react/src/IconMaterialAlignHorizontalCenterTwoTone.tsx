import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenterTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterTwoTone'
      short_name='AlignHorizontalCenter'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon points="11,2 13,2 13,7 21,7 21,10 13,10 13,14 18,14 18,17 13,17 13,22 11,22 11,17 6,17 6,14 11,14 11,10 3,10 3,7 11,7"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterTwoTone.displayName = 'AmauiIconMaterialAlignHorizontalCenterTwoTone';

export default IconMaterialAlignHorizontalCenterTwoTone;
