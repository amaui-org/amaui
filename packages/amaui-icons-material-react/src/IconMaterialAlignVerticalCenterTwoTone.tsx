import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterTwoTone'
      short_name='AlignVerticalCenter'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon points="22,11 17,11 17,6 14,6 14,11 10,11 10,3 7,3 7,11 1.84,11 1.84,13 7,13 7,21 10,21 10,13 14,13 14,18 17,18 17,13 22,13"/>
    </Icon>
  );
});

export default IconMaterialAlignVerticalCenterTwoTone;
