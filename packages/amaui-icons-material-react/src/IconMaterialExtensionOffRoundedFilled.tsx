import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffRoundedFilled'
      short_name='ExtensionOff'

      {...props}
    >
      <path d="M19.075 21.9 18.15 21Q18.15 21 18.15 21Q18.15 21 18.15 21H14.2Q14.2 19.75 13.413 18.875Q12.625 18 11.5 18Q10.375 18 9.588 18.875Q8.8 19.75 8.8 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V15.2Q4.25 15.2 5.125 14.412Q6 13.625 6 12.5Q6 11.375 5.125 10.587Q4.25 9.8 3 9.8V5.85Q3 5.85 3 5.85Q3 5.85 3 5.85L2.075 4.925Q1.8 4.65 1.8 4.225Q1.8 3.8 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.525 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.2 22.2 19.775 22.2Q19.35 22.2 19.075 21.9ZM20 17.15 6.85 4H9Q9 2.95 9.725 2.225Q10.45 1.5 11.5 1.5Q12.55 1.5 13.275 2.225Q14 2.95 14 4H18Q18.825 4 19.413 4.588Q20 5.175 20 6V10Q21.05 10 21.775 10.725Q22.5 11.45 22.5 12.5Q22.5 13.55 21.775 14.275Q21.05 15 20 15Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffRoundedFilled.displayName = 'AmauiIconMaterialExtensionOffRoundedFilled';

export default IconMaterialExtensionOffRoundedFilled;
