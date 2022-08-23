import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownSharpW100'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M12 14.1 8.55 10.65H15.45Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownSharpW100.displayName = 'AmauiIconMaterialArrowDropDownSharpW100';

export default IconMaterialArrowDropDownSharpW100;
