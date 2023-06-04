import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckBoxOutlineBlankW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxOutlineBlankW100'

      short_name='CheckBoxOutlineBlank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxOutlineBlankW100.displayName = 'AmauiIconMaterialCheckBoxOutlineBlankW100';

export default IconMaterialCheckBoxOutlineBlankW100;
