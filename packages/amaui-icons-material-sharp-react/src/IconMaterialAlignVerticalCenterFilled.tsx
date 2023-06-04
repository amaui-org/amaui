import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterFilled'

      short_name='AlignVerticalCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21v-8H2v-2h5V3h3v8h4V6h3v5h5v2h-5v5h-3v-5h-4v8Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterFilled.displayName = 'AmauiIconMaterialAlignVerticalCenterFilled';

export default IconMaterialAlignVerticalCenterFilled;
