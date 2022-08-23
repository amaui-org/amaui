import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness7SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness7SharpW100Filled'
      short_name='Brightness7'

      {...props}
    >
      <path d="M12 21.5 9.2 18.7H5.3V14.8L2.5 12L5.3 9.2V5.3H9.2L12 2.5L14.8 5.3H18.7V9.2L21.5 12L18.7 14.8V18.7H14.8ZM12 16Q13.65 16 14.825 14.825Q16 13.65 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialBrightness7SharpW100Filled.displayName = 'AmauiIconMaterialBrightness7SharpW100Filled';

export default IconMaterialBrightness7SharpW100Filled;
