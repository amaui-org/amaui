import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsPhoneRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhoneRoundedFilled'
      short_name='SettingsPhone'

      {...props}
    >
      <path d="M12 11Q11.575 11 11.288 10.712Q11 10.425 11 10Q11 9.575 11.288 9.287Q11.575 9 12 9Q12.425 9 12.713 9.287Q13 9.575 13 10Q13 10.425 12.713 10.712Q12.425 11 12 11ZM16 11Q15.575 11 15.288 10.712Q15 10.425 15 10Q15 9.575 15.288 9.287Q15.575 9 16 9Q16.425 9 16.712 9.287Q17 9.575 17 10Q17 10.425 16.712 10.712Q16.425 11 16 11ZM20 11Q19.575 11 19.288 10.712Q19 10.425 19 10Q19 9.575 19.288 9.287Q19.575 9 20 9Q20.425 9 20.712 9.287Q21 9.575 21 10Q21 10.425 20.712 10.712Q20.425 11 20 11ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhoneRoundedFilled.displayName = 'AmauiIconMaterialSettingsPhoneRoundedFilled';

export default IconMaterialSettingsPhoneRoundedFilled;
