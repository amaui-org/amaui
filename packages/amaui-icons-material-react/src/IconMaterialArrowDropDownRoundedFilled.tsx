import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropDownRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownRoundedFilled'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M11.3 14.3 8.7 11.7Q8.225 11.225 8.488 10.613Q8.75 10 9.425 10H14.575Q15.25 10 15.512 10.613Q15.775 11.225 15.3 11.7L12.7 14.3Q12.55 14.45 12.375 14.525Q12.2 14.6 12 14.6Q11.8 14.6 11.625 14.525Q11.45 14.45 11.3 14.3Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownRoundedFilled.displayName = 'AmauiIconMaterialArrowDropDownRoundedFilled';

export default IconMaterialArrowDropDownRoundedFilled;
