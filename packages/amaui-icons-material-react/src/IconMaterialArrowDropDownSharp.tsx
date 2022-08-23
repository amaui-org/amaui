import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownSharp'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M12 15 7 10H17Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownSharp.displayName = 'AmauiIconMaterialArrowDropDownSharp';

export default IconMaterialArrowDropDownSharp;
