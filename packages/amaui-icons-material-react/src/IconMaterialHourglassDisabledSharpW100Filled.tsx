import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassDisabledSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledSharpW100Filled'
      short_name='HourglassDisabled'

      {...props}
    >
      <path d="M21.3 22.3 19.7 20.7H5.55V20H7.7V17Q7.7 15.325 8.625 13.962Q9.55 12.6 11.1 12.1L10.775 11.775Q9.875 11.425 9.188 10.725Q8.5 10.025 8.125 9.125L2.25 3.25L2.75 2.75L21.8 21.8ZM14.1 11.3 13.65 10.85Q14.55 10.3 15.075 9.25Q15.6 8.2 15.6 7V4H8.4V5.6L7.7 4.9V4H6.8L6.1 3.3H18.45V4H16.3V7Q16.3 8.325 15.713 9.462Q15.125 10.6 14.1 11.3ZM8.4 20H15.6V16.6L11.725 12.725Q10.225 12.85 9.312 14.113Q8.4 15.375 8.4 17ZM16.3 20H19L16.3 17.3Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledSharpW100Filled.displayName = 'AmauiIconMaterialHourglassDisabledSharpW100Filled';

export default IconMaterialHourglassDisabledSharpW100Filled;
