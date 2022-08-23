import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarRepairSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRepairSharpFilled'
      short_name='CarRepair'

      {...props}
    >
      <path d="M11 22V19H4V17H20V19H13V22ZM9 11.5Q9.425 11.5 9.713 11.212Q10 10.925 10 10.5Q10 10.075 9.713 9.787Q9.425 9.5 9 9.5Q8.575 9.5 8.288 9.787Q8 10.075 8 10.5Q8 10.925 8.288 11.212Q8.575 11.5 9 11.5ZM15 11.5Q15.425 11.5 15.713 11.212Q16 10.925 16 10.5Q16 10.075 15.713 9.787Q15.425 9.5 15 9.5Q14.575 9.5 14.288 9.787Q14 10.075 14 10.5Q14 10.925 14.288 11.212Q14.575 11.5 15 11.5ZM5 16V8.6L6.925 3H17.075L19 8.6V16H17V14H7V16ZM7.65 7H16.35L15.65 5H8.35Z"/>
    </Icon>
  );
});

IconMaterialCarRepairSharpFilled.displayName = 'AmauiIconMaterialCarRepairSharpFilled';

export default IconMaterialCarRepairSharpFilled;
