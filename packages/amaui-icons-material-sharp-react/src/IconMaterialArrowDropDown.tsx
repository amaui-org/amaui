import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDown'

      short_name='ArrowDropDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15-5-5h10Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDown.displayName = 'AmauiIconMaterialArrowDropDown';

export default IconMaterialArrowDropDown;
