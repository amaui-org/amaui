import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoundedW100'
      short_name='Add'

      {...props}
    >
      <path d="M12 18.35Q11.85 18.35 11.75 18.25Q11.65 18.15 11.65 18V12.35H6Q5.85 12.35 5.75 12.25Q5.65 12.15 5.65 12Q5.65 11.85 5.75 11.75Q5.85 11.65 6 11.65H11.65V6Q11.65 5.85 11.75 5.75Q11.85 5.65 12 5.65Q12.15 5.65 12.25 5.75Q12.35 5.85 12.35 6V11.65H18Q18.15 11.65 18.25 11.75Q18.35 11.85 18.35 12Q18.35 12.15 18.25 12.25Q18.15 12.35 18 12.35H12.35V18Q12.35 18.15 12.25 18.25Q12.15 18.35 12 18.35Z"/>
    </Icon>
  );
});

export default IconMaterialAddRoundedW100;
