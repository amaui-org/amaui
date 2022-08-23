import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInfoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfoRoundedW100Filled'
      short_name='Info'

      {...props}
    >
      <path d="M12 16.35Q12.15 16.35 12.25 16.25Q12.35 16.15 12.35 16V11.325Q12.35 11.2 12.25 11.1Q12.15 11 12 11Q11.85 11 11.75 11.1Q11.65 11.2 11.65 11.35V16.025Q11.65 16.15 11.75 16.25Q11.85 16.35 12 16.35ZM12 9.75Q12.225 9.75 12.363 9.6Q12.5 9.45 12.5 9.25Q12.5 9.025 12.363 8.887Q12.225 8.75 12 8.75Q11.8 8.75 11.65 8.887Q11.5 9.025 11.5 9.25Q11.5 9.45 11.65 9.6Q11.8 9.75 12 9.75ZM12 20.7Q10.175 20.7 8.588 20.025Q7 19.35 5.825 18.175Q4.65 17 3.975 15.412Q3.3 13.825 3.3 12Q3.3 10.175 3.975 8.587Q4.65 7 5.825 5.825Q7 4.65 8.588 3.975Q10.175 3.3 12 3.3Q13.825 3.3 15.413 3.975Q17 4.65 18.175 5.825Q19.35 7 20.025 8.587Q20.7 10.175 20.7 12Q20.7 13.825 20.025 15.412Q19.35 17 18.175 18.175Q17 19.35 15.413 20.025Q13.825 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialInfoRoundedW100Filled.displayName = 'AmauiIconMaterialInfoRoundedW100Filled';

export default IconMaterialInfoRoundedW100Filled;
