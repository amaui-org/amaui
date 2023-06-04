import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRightW100Filled'

      short_name='AlignHorizontalRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.35 20.7q-.15 0-.25-.1t-.1-.25V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v16.7q0 .15-.1.25t-.25.1ZM5.175 9.65q-.35 0-.613-.263-.262-.262-.262-.612t.262-.613q.263-.262.613-.262h10.2q.35 0 .613.262.262.263.262.613t-.262.612q-.263.263-.613.263Zm6 6.45q-.35 0-.613-.262-.262-.263-.262-.613t.262-.612q.263-.263.613-.263h4.2q.35 0 .613.263.262.262.262.612t-.262.613q-.263.262-.613.262Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalRightW100Filled.displayName = 'AmauiIconMaterialAlignHorizontalRightW100Filled';

export default IconMaterialAlignHorizontalRightW100Filled;
