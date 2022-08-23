import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerRoundedFilled'
      short_name='Scanner'

      {...props}
    >
      <path d="M17.6 12 4.425 7.225Q4.05 7.1 3.888 6.725Q3.725 6.35 3.85 5.95Q3.975 5.55 4.362 5.387Q4.75 5.225 5.15 5.35L19.8 10.7Q20.3 10.9 20.65 11.4Q21 11.9 21 12.5V18Q21 18.825 20.413 19.413Q19.825 20 19 20H5Q4.175 20 3.587 19.413Q3 18.825 3 18V14Q3 13.175 3.587 12.587Q4.175 12 5 12ZM11 17H17Q17.425 17 17.712 16.712Q18 16.425 18 16Q18 15.575 17.712 15.287Q17.425 15 17 15H11Q10.575 15 10.288 15.287Q10 15.575 10 16Q10 16.425 10.288 16.712Q10.575 17 11 17ZM7 17Q7.425 17 7.713 16.712Q8 16.425 8 16Q8 15.575 7.713 15.287Q7.425 15 7 15Q6.575 15 6.287 15.287Q6 15.575 6 16Q6 16.425 6.287 16.712Q6.575 17 7 17Z"/>
    </Icon>
  );
});

IconMaterialScannerRoundedFilled.displayName = 'AmauiIconMaterialScannerRoundedFilled';

export default IconMaterialScannerRoundedFilled;
