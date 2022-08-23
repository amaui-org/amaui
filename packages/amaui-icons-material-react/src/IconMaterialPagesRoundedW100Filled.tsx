import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPagesRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesRoundedW100Filled'
      short_name='Pages'

      {...props}
    >
      <path d="M12 14.85Q12.125 14.85 12.225 14.8Q12.325 14.75 12.375 14.625L13.075 13.075L14.625 12.375Q14.75 12.325 14.8 12.225Q14.85 12.125 14.85 12Q14.85 11.875 14.8 11.775Q14.75 11.675 14.625 11.625L13.075 10.925L12.375 9.375Q12.325 9.25 12.225 9.2Q12.125 9.15 12 9.15Q11.875 9.15 11.775 9.2Q11.675 9.25 11.625 9.375L10.925 10.925L9.375 11.625Q9.25 11.675 9.2 11.775Q9.15 11.875 9.15 12Q9.15 12.125 9.2 12.225Q9.25 12.325 9.375 12.375L10.925 13.075L11.625 14.625Q11.675 14.75 11.775 14.8Q11.875 14.85 12 14.85ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialPagesRoundedW100Filled.displayName = 'AmauiIconMaterialPagesRoundedW100Filled';

export default IconMaterialPagesRoundedW100Filled;
