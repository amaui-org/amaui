import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterW100'

      short_name='AlignVerticalCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.775 19.7v-7.35H3.3v-.7h4.475V4.3h1.75v7.35h4.95V7.3h1.75v4.35H20.7v.7h-4.475v4.35h-1.75v-4.35h-4.95v7.35Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterW100.displayName = 'AmauiIconMaterialAlignVerticalCenterW100';

export default IconMaterialAlignVerticalCenterW100;
