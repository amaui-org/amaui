import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsPhoneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhoneSharpFilled'
      short_name='SettingsPhone'

      {...props}
    >
      <path d="M12 11Q11.575 11 11.288 10.712Q11 10.425 11 10Q11 9.575 11.288 9.287Q11.575 9 12 9Q12.425 9 12.713 9.287Q13 9.575 13 10Q13 10.425 12.713 10.712Q12.425 11 12 11ZM16 11Q15.575 11 15.288 10.712Q15 10.425 15 10Q15 9.575 15.288 9.287Q15.575 9 16 9Q16.425 9 16.712 9.287Q17 9.575 17 10Q17 10.425 16.712 10.712Q16.425 11 16 11ZM20 11Q19.575 11 19.288 10.712Q19 10.425 19 10Q19 9.575 19.288 9.287Q19.575 9 20 9Q20.425 9 20.712 9.287Q21 9.575 21 10Q21 10.425 20.712 10.712Q20.425 11 20 11ZM19.95 21Q16.725 21 13.663 19.575Q10.6 18.15 8.238 15.775Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.8 3 3.525Q3 3.25 3.05 3H8.9L9.825 8.025L6.975 10.9Q8.025 12.7 9.613 14.275Q11.2 15.85 13.1 17L16 14.1L21 15.1V20.95Q20.75 20.975 20.475 20.988Q20.2 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhoneSharpFilled.displayName = 'AmauiIconMaterialSettingsPhoneSharpFilled';

export default IconMaterialSettingsPhoneSharpFilled;
