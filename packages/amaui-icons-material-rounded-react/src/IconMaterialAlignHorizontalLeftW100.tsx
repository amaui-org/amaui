import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftW100'

      short_name='AlignHorizontalLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 20.7q-.15 0-.25-.1t-.1-.25V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v16.7q0 .15-.1.25t-.25.1ZM8.625 9.65q-.35 0-.613-.263-.262-.262-.262-.612t.262-.613q.263-.262.613-.262h10.2q.35 0 .613.262.262.263.262.613t-.262.612q-.263.263-.613.263Zm0 6.45q-.35 0-.613-.262-.262-.263-.262-.613t.262-.612q.263-.263.613-.263h4.2q.35 0 .613.263.262.262.262.612t-.262.613q-.263.262-.613.262Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftW100.displayName = 'AmauiIconMaterialAlignHorizontalLeftW100';

export default IconMaterialAlignHorizontalLeftW100;
