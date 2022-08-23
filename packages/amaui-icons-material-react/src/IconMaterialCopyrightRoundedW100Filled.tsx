import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCopyrightRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyrightRoundedW100Filled'
      short_name='Copyright'

      {...props}
    >
      <path d="M10 15.35H14Q14.15 15.35 14.25 15.25Q14.35 15.15 14.35 15V13.975Q14.35 13.85 14.25 13.75Q14.15 13.65 14 13.65Q13.85 13.65 13.75 13.75Q13.65 13.85 13.65 14V14.65H10.35V9.35H13.65V10.025Q13.65 10.15 13.75 10.25Q13.85 10.35 14 10.35Q14.15 10.35 14.25 10.25Q14.35 10.15 14.35 10V9Q14.35 8.85 14.25 8.75Q14.15 8.65 14 8.65H10Q9.85 8.65 9.75 8.75Q9.65 8.85 9.65 9V15Q9.65 15.15 9.75 15.25Q9.85 15.35 10 15.35ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialCopyrightRoundedW100Filled.displayName = 'AmauiIconMaterialCopyrightRoundedW100Filled';

export default IconMaterialCopyrightRoundedW100Filled;
