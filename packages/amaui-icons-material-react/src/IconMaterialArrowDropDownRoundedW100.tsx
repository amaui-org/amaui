import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownRoundedW100'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M11.5 13.575 9.85 11.925Q9.5 11.575 9.688 11.112Q9.875 10.65 10.375 10.65H13.675Q14.175 10.65 14.363 11.112Q14.55 11.575 14.2 11.925L12.55 13.575Q12.425 13.7 12.3 13.75Q12.175 13.8 12.025 13.8Q11.875 13.8 11.75 13.75Q11.625 13.7 11.5 13.575Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownRoundedW100.displayName = 'AmauiIconMaterialArrowDropDownRoundedW100';

export default IconMaterialArrowDropDownRoundedW100;
