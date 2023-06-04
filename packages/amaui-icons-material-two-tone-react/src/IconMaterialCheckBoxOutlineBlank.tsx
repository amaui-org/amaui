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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    </Icon>
  );
});

IconMaterialCheckBoxOutlineBlank.displayName = 'AmauiIconMaterialCheckBoxOutlineBlank';

export default IconMaterialCheckBoxOutlineBlank;
