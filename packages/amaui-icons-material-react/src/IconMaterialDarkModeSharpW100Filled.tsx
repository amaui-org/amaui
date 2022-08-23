import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDarkModeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeSharpW100Filled'
      short_name='DarkMode'

      {...props}
    >
      <path d="M12.075 19.7Q8.875 19.7 6.625 17.45Q4.375 15.2 4.375 12Q4.375 9.175 6.162 7.062Q7.95 4.95 10.625 4.425Q10.625 4.425 10.625 4.425Q10.625 4.425 10.625 4.425Q10.275 5.125 10.075 5.9Q9.875 6.675 9.875 7.5Q9.875 10.3 11.825 12.25Q13.775 14.2 16.575 14.2Q17.4 14.2 18.175 14Q18.95 13.8 19.625 13.45Q19.625 13.45 19.625 13.45Q19.625 13.45 19.625 13.45Q19.125 16.125 17.012 17.913Q14.9 19.7 12.075 19.7Z"/>
    </Icon>
  );
});

IconMaterialDarkModeSharpW100Filled.displayName = 'AmauiIconMaterialDarkModeSharpW100Filled';

export default IconMaterialDarkModeSharpW100Filled;
