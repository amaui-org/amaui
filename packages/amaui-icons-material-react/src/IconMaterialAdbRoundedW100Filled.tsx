import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdbRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdbRoundedW100Filled'
      short_name='Adb'

      {...props}
    >
      <path d="M6.4 11.25V10.45Q6.4 9 7.05 7.825Q7.7 6.65 8.8 5.875L7.3 4.375L8 3.65L9.7 5.35Q10.2 5.1 10.8 4.975Q11.4 4.85 12 4.85Q12.6 4.85 13.2 4.975Q13.8 5.1 14.3 5.35L16 3.65L16.7 4.375L15.2 5.875Q16.3 6.65 16.95 7.825Q17.6 9 17.6 10.45V11.25ZM14.4 9.65Q14.75 9.65 14.975 9.425Q15.2 9.2 15.2 8.85Q15.2 8.5 14.975 8.275Q14.75 8.05 14.4 8.05Q14.05 8.05 13.825 8.275Q13.6 8.5 13.6 8.85Q13.6 9.2 13.825 9.425Q14.05 9.65 14.4 9.65ZM9.6 9.65Q9.95 9.65 10.175 9.425Q10.4 9.2 10.4 8.85Q10.4 8.5 10.175 8.275Q9.95 8.05 9.6 8.05Q9.25 8.05 9.025 8.275Q8.8 8.5 8.8 8.85Q8.8 9.2 9.025 9.425Q9.25 9.65 9.6 9.65ZM12 20.85Q9.65 20.85 8.025 19.225Q6.4 17.6 6.4 15.25V12.05H17.6V15.25Q17.6 17.6 15.975 19.225Q14.35 20.85 12 20.85Z"/>
    </Icon>
  );
});

IconMaterialAdbRoundedW100Filled.displayName = 'AmauiIconMaterialAdbRoundedW100Filled';

export default IconMaterialAdbRoundedW100Filled;
