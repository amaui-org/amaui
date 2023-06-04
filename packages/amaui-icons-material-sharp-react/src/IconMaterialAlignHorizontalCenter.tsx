import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenter'

      short_name='AlignHorizontalCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-5H6v-3h5v-4H3V7h8V2h2v5h8v3h-8v4h5v3h-5v5Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenter.displayName = 'AmauiIconMaterialAlignHorizontalCenter';

export default IconMaterialAlignHorizontalCenter;
