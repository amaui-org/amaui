import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness4SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4SharpW100Filled'
      short_name='Brightness4'

      {...props}
    >
      <path d="M12.6 16Q14.25 16 15.425 14.825Q16.6 13.65 16.6 12Q16.6 10.35 15.425 9.175Q14.25 8 12.6 8Q12.175 8 11.763 8.1Q11.35 8.2 10.95 8.375Q12.025 8.875 12.65 9.85Q13.275 10.825 13.275 12Q13.275 13.175 12.65 14.15Q12.025 15.125 10.95 15.625Q11.35 15.8 11.763 15.9Q12.175 16 12.6 16ZM12 21.5 9.2 18.7H5.3V14.8L2.5 12L5.3 9.2V5.3H9.2L12 2.5L14.8 5.3H18.7V9.2L21.5 12L18.7 14.8V18.7H14.8Z"/>
    </Icon>
  );
});

IconMaterialBrightness4SharpW100Filled.displayName = 'AmauiIconMaterialBrightness4SharpW100Filled';

export default IconMaterialBrightness4SharpW100Filled;
