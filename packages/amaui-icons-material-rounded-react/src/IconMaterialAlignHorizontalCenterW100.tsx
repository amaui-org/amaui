import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterW100'

      short_name='AlignHorizontalCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-.15 0-.25-.1t-.1-.25V16.1H8.175q-.35 0-.613-.262-.262-.263-.262-.613t.262-.612q.263-.263.613-.263h3.475v-4.7H5.175q-.35 0-.613-.263-.262-.262-.262-.612t.262-.613q.263-.262.613-.262h6.475V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V7.9h6.475q.35 0 .613.262.262.263.262.613t-.262.612q-.263.263-.613.263H12.35v4.7h3.475q.35 0 .613.263.262.262.262.612t-.262.613q-.263.262-.613.262H12.35v4.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterW100.displayName = 'AmauiIconMaterialAlignHorizontalCenterW100';

export default IconMaterialAlignHorizontalCenterW100;
