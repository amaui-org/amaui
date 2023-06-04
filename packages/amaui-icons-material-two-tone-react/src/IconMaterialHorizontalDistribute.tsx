import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalDistribute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistribute'

      short_name='HorizontalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistribute.displayName = 'AmauiIconMaterialHorizontalDistribute';

export default IconMaterialHorizontalDistribute;
