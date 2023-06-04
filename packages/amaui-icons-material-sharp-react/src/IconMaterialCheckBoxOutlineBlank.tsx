import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckBoxOutlineBlank = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxOutlineBlank'

      short_name='CheckBoxOutlineBlank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h14V5H5Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxOutlineBlank.displayName = 'AmauiIconMaterialCheckBoxOutlineBlank';

export default IconMaterialCheckBoxOutlineBlank;
