import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUndoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoRoundedW100Filled'
      short_name='Undo'

      {...props}
    >
      <path d="M7.875 18.35Q7.725 18.35 7.625 18.25Q7.525 18.15 7.525 18Q7.525 17.85 7.625 17.75Q7.725 17.65 7.875 17.65H13.975Q15.825 17.65 17.175 16.475Q18.525 15.3 18.525 13.5Q18.525 11.7 17.175 10.525Q15.825 9.35 13.975 9.35H6.125L9.125 12.35Q9.225 12.45 9.238 12.587Q9.25 12.725 9.125 12.85Q9 12.975 8.875 12.975Q8.75 12.975 8.625 12.85L5.3 9.525Q5.175 9.4 5.125 9.275Q5.075 9.15 5.075 9Q5.075 8.85 5.125 8.725Q5.175 8.6 5.3 8.475L8.625 5.15Q8.725 5.05 8.863 5.037Q9 5.025 9.125 5.15Q9.25 5.275 9.25 5.4Q9.25 5.525 9.125 5.65L6.125 8.65H13.975Q16.1 8.65 17.663 10.037Q19.225 11.425 19.225 13.5Q19.225 15.575 17.663 16.962Q16.1 18.35 13.975 18.35Z"/>
    </Icon>
  );
});

IconMaterialUndoRoundedW100Filled.displayName = 'AmauiIconMaterialUndoRoundedW100Filled';

export default IconMaterialUndoRoundedW100Filled;
