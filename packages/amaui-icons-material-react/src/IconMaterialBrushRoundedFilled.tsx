import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrushRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushRoundedFilled'
      short_name='Brush'

      {...props}
    >
      <path d="M6 21Q4.875 21 3.775 20.45Q2.675 19.9 2 19Q2.65 19 3.325 18.488Q4 17.975 4 17Q4 15.75 4.875 14.875Q5.75 14 7 14Q8.25 14 9.125 14.875Q10 15.75 10 17Q10 18.65 8.825 19.825Q7.65 21 6 21ZM11.75 15 9 12.25 17.95 3.3Q18.225 3.025 18.638 3.012Q19.05 3 19.35 3.3L20.7 4.65Q21 4.95 21 5.35Q21 5.75 20.7 6.05Z"/>
    </Icon>
  );
});

IconMaterialBrushRoundedFilled.displayName = 'AmauiIconMaterialBrushRoundedFilled';

export default IconMaterialBrushRoundedFilled;
