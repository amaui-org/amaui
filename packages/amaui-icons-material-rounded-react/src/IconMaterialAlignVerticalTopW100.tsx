import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopW100'

      short_name='AlignVerticalTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 4.625q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM8.775 20.05q-.35 0-.612-.262-.263-.263-.263-.613V8.25q0-.35.263-.613.262-.262.612-.262t.612.262q.263.263.263.613v10.925q0 .35-.263.613-.262.262-.612.262Zm6.45-6q-.35 0-.612-.263-.263-.262-.263-.612V8.25q0-.35.263-.613.262-.262.612-.262t.613.262q.262.263.262.613v4.925q0 .35-.262.612-.263.263-.613.263Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopW100.displayName = 'AmauiIconMaterialAlignVerticalTopW100';

export default IconMaterialAlignVerticalTopW100;
