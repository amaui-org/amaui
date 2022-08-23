import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardAlertRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertRoundedFilled'
      short_name='SdCardAlert'

      {...props}
    >
      <path d="M12 13Q12.425 13 12.713 12.712Q13 12.425 13 12V9Q13 8.575 12.713 8.287Q12.425 8 12 8Q11.575 8 11.288 8.287Q11 8.575 11 9V12Q11 12.425 11.288 12.712Q11.575 13 12 13ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16Q13 15.575 12.713 15.287Q12.425 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8.825Q4 8.425 4.15 8.062Q4.3 7.7 4.575 7.425L9.425 2.575Q9.7 2.3 10.062 2.15Q10.425 2 10.825 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertRoundedFilled.displayName = 'AmauiIconMaterialSdCardAlertRoundedFilled';

export default IconMaterialSdCardAlertRoundedFilled;
