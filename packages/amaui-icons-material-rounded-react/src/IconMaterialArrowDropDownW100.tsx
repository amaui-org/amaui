import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownW100'

      short_name='ArrowDropDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.5 13.575-1.65-1.65q-.35-.35-.162-.813.187-.462.687-.462h3.3q.5 0 .688.462.187.463-.163.813l-1.65 1.65q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownW100.displayName = 'AmauiIconMaterialArrowDropDownW100';

export default IconMaterialArrowDropDownW100;
