import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks5RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5RoundedW100Filled'
      short_name='Looks5'

      {...props}
    >
      <path d="M10 16.35H12.85Q13.5 16.35 13.925 15.925Q14.35 15.5 14.35 14.85V13.15Q14.35 12.5 13.925 12.075Q13.5 11.65 12.85 11.65H10.35V8.35H14.025Q14.15 8.35 14.25 8.25Q14.35 8.15 14.35 8Q14.35 7.85 14.25 7.75Q14.15 7.65 14 7.65H10Q9.85 7.65 9.75 7.75Q9.65 7.85 9.65 8V12Q9.65 12.15 9.75 12.25Q9.85 12.35 10 12.35H12.85Q13.2 12.35 13.425 12.575Q13.65 12.8 13.65 13.15V14.85Q13.65 15.2 13.425 15.425Q13.2 15.65 12.85 15.65H9.975Q9.85 15.65 9.75 15.75Q9.65 15.85 9.65 16Q9.65 16.15 9.75 16.25Q9.85 16.35 10 16.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialLooks5RoundedW100Filled.displayName = 'AmauiIconMaterialLooks5RoundedW100Filled';

export default IconMaterialLooks5RoundedW100Filled;
