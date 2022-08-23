import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStickyNote2RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2RoundedW100Filled'
      short_name='StickyNote2'

      {...props}
    >
      <path d="M5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H18.2Q18.825 4.3 19.263 4.737Q19.7 5.175 19.7 5.8V14.075L14.075 19.7ZM11.65 13.3Q11.8 13.3 11.9 13.2Q12 13.1 12 12.95Q12 12.8 11.9 12.7Q11.8 12.6 11.65 12.6H8.5Q8.35 12.6 8.25 12.7Q8.15 12.8 8.15 12.95Q8.15 13.1 8.25 13.2Q8.35 13.3 8.5 13.3ZM15.5 9.35Q15.65 9.35 15.75 9.25Q15.85 9.15 15.85 9Q15.85 8.85 15.75 8.75Q15.65 8.65 15.5 8.65H8.5Q8.35 8.65 8.25 8.75Q8.15 8.85 8.15 9Q8.15 9.15 8.25 9.25Q8.35 9.35 8.5 9.35ZM14 19 19 14H14.75Q14.425 14 14.213 14.212Q14 14.425 14 14.75Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2RoundedW100Filled.displayName = 'AmauiIconMaterialStickyNote2RoundedW100Filled';

export default IconMaterialStickyNote2RoundedW100Filled;
