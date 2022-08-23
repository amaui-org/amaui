import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearAllRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllRoundedW100'
      short_name='ClearAll'

      {...props}
    >
      <path d="M18 12.35H6Q5.85 12.35 5.75 12.25Q5.65 12.15 5.65 12Q5.65 11.85 5.75 11.75Q5.85 11.65 6 11.65H18Q18.15 11.65 18.25 11.75Q18.35 11.85 18.35 12Q18.35 12.15 18.25 12.25Q18.15 12.35 18 12.35ZM16 16.35H4Q3.85 16.35 3.75 16.25Q3.65 16.15 3.65 16Q3.65 15.85 3.75 15.75Q3.85 15.65 4 15.65H16Q16.15 15.65 16.25 15.75Q16.35 15.85 16.35 16Q16.35 16.15 16.25 16.25Q16.15 16.35 16 16.35ZM20 8.35H8Q7.85 8.35 7.75 8.25Q7.65 8.15 7.65 8Q7.65 7.85 7.75 7.75Q7.85 7.65 8 7.65H20Q20.15 7.65 20.25 7.75Q20.35 7.85 20.35 8Q20.35 8.15 20.25 8.25Q20.15 8.35 20 8.35Z"/>
    </Icon>
  );
});

IconMaterialClearAllRoundedW100.displayName = 'AmauiIconMaterialClearAllRoundedW100';

export default IconMaterialClearAllRoundedW100;
