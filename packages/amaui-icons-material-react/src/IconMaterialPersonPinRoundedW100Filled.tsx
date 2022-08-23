import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinRoundedW100Filled'
      short_name='PersonPin'

      {...props}
    >
      <path d="M12 20.85Q11.85 20.85 11.725 20.8Q11.6 20.75 11.475 20.625L9.55 18.7H5.8Q5.15 18.7 4.725 18.275Q4.3 17.85 4.3 17.2V4.8Q4.3 4.15 4.725 3.725Q5.15 3.3 5.8 3.3H18.2Q18.85 3.3 19.275 3.725Q19.7 4.15 19.7 4.8V17.2Q19.7 17.85 19.275 18.275Q18.85 18.7 18.2 18.7H14.45L12.525 20.625Q12.4 20.75 12.275 20.8Q12.15 20.85 12 20.85ZM12 12.1Q13.2 12.1 14.025 11.275Q14.85 10.45 14.85 9.25Q14.85 8.05 14.025 7.225Q13.2 6.4 12 6.4Q10.8 6.4 9.975 7.225Q9.15 8.05 9.15 9.25Q9.15 10.45 9.975 11.275Q10.8 12.1 12 12.1ZM12 20.15 14.15 18H18.2Q18.55 18 18.775 17.8Q19 17.6 19 17.35Q17.65 16.025 15.863 15.262Q14.075 14.5 12 14.5Q9.925 14.5 8.138 15.262Q6.35 16.025 5 17.35Q5 17.6 5.225 17.8Q5.45 18 5.8 18H9.85Z"/>
    </Icon>
  );
});

IconMaterialPersonPinRoundedW100Filled.displayName = 'AmauiIconMaterialPersonPinRoundedW100Filled';

export default IconMaterialPersonPinRoundedW100Filled;
