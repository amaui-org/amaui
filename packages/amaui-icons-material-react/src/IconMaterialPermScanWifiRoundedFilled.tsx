import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermScanWifiRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiRoundedFilled'
      short_name='PermScanWifi'

      {...props}
    >
      <path d="M12 20.175Q11.625 20.175 11.25 20.025Q10.875 19.875 10.575 19.575L1.425 10.425Q0.825 9.825 0.838 8.987Q0.85 8.15 1.475 7.65Q3.725 5.85 6.425 4.925Q9.125 4 12 4Q14.875 4 17.575 4.925Q20.275 5.85 22.525 7.65Q23.15 8.15 23.163 8.987Q23.175 9.825 22.575 10.425L13.425 19.575Q13.125 19.875 12.75 20.025Q12.375 20.175 12 20.175ZM12 15Q12.425 15 12.713 14.712Q13 14.425 13 14V11Q13 10.575 12.713 10.287Q12.425 10 12 10Q11.575 10 11.288 10.287Q11 10.575 11 11V14Q11 14.425 11.288 14.712Q11.575 15 12 15ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiRoundedFilled.displayName = 'AmauiIconMaterialPermScanWifiRoundedFilled';

export default IconMaterialPermScanWifiRoundedFilled;
