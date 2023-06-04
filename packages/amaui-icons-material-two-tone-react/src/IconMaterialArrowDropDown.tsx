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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10l5 5 5-5H7z"/>
    </Icon>
  );
});

IconMaterialArrowDropDown.displayName = 'AmauiIconMaterialArrowDropDown';

export default IconMaterialArrowDropDown;
