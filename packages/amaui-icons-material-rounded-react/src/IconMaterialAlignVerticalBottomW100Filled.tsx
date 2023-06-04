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
      <path d="M3.65 20.05q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm5.125-3.45q-.35 0-.612-.263-.263-.262-.263-.612V4.8q0-.35.263-.613.262-.262.612-.262t.612.262q.263.263.263.613v10.925q0 .35-.263.612-.262.263-.612.263Zm6.45 0q-.35 0-.612-.263-.263-.262-.263-.612V10.8q0-.35.263-.612.262-.263.612-.263t.613.263q.262.262.262.612v4.925q0 .35-.262.612-.263.263-.613.263Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomW100Filled.displayName = 'AmauiIconMaterialAlignVerticalBottomW100Filled';

export default IconMaterialAlignVerticalBottomW100Filled;
