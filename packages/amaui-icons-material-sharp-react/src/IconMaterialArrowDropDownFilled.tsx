import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownFilled'

      short_name='ArrowDropDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15-5-5h10Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownFilled.displayName = 'AmauiIconMaterialArrowDropDownFilled';

export default IconMaterialArrowDropDownFilled;
