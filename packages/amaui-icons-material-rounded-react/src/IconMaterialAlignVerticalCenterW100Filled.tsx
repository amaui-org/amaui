import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterW100Filled'

      short_name='AlignVerticalCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 19.7q-.35 0-.612-.262-.263-.263-.263-.613V12.35H3.65q-.15 0-.25-.1T3.3 12q0-.15.1-.25t.25-.1h4.125V5.175q0-.35.263-.613Q8.3 4.3 8.65 4.3t.612.262q.263.263.263.613v6.475h4.95V8.175q0-.35.263-.613Q15 7.3 15.35 7.3t.613.262q.262.263.262.613v3.475h4.125q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.125v3.475q0 .35-.262.613-.263.262-.613.262t-.612-.262q-.263-.263-.263-.613V12.35h-4.95v6.475q0 .35-.263.613Q9 19.7 8.65 19.7Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterW100Filled.displayName = 'AmauiIconMaterialAlignVerticalCenterW100Filled';

export default IconMaterialAlignVerticalCenterW100Filled;
