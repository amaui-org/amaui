import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropUpRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpRoundedFilled'
      short_name='ArrowDropUp'

      {...props}
    >
      <path d="M9.425 14Q8.75 14 8.488 13.387Q8.225 12.775 8.7 12.3L11.3 9.7Q11.45 9.55 11.625 9.475Q11.8 9.4 12 9.4Q12.2 9.4 12.375 9.475Q12.55 9.55 12.7 9.7L15.3 12.3Q15.775 12.775 15.512 13.387Q15.25 14 14.575 14Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpRoundedFilled.displayName = 'AmauiIconMaterialArrowDropUpRoundedFilled';

export default IconMaterialArrowDropUpRoundedFilled;
