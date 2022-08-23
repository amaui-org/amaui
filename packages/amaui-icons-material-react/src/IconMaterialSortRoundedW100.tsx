import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortRoundedW100'
      short_name='Sort'

      {...props}
    >
      <path d="M8 17.35H4Q3.85 17.35 3.75 17.25Q3.65 17.15 3.65 17Q3.65 16.85 3.75 16.75Q3.85 16.65 4 16.65H8Q8.15 16.65 8.25 16.75Q8.35 16.85 8.35 17Q8.35 17.15 8.25 17.25Q8.15 17.35 8 17.35ZM20 6.35H4Q3.85 6.35 3.75 6.25Q3.65 6.15 3.65 6Q3.65 5.85 3.75 5.75Q3.85 5.65 4 5.65H20Q20.15 5.65 20.25 5.75Q20.35 5.85 20.35 6Q20.35 6.15 20.25 6.25Q20.15 6.35 20 6.35ZM14 11.85H4Q3.85 11.85 3.75 11.75Q3.65 11.65 3.65 11.5Q3.65 11.35 3.75 11.25Q3.85 11.15 4 11.15H14Q14.15 11.15 14.25 11.25Q14.35 11.35 14.35 11.5Q14.35 11.65 14.25 11.75Q14.15 11.85 14 11.85Z"/>
    </Icon>
  );
});

IconMaterialSortRoundedW100.displayName = 'AmauiIconMaterialSortRoundedW100';

export default IconMaterialSortRoundedW100;
