import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVignetteSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteSharpW100'
      short_name='Vignette'

      {...props}
    >
      <path d="M12 15.35Q14.2 15.35 15.775 14.35Q17.35 13.35 17.35 12Q17.35 10.65 15.775 9.65Q14.2 8.65 12 8.65Q9.8 8.65 8.225 9.65Q6.65 10.65 6.65 12Q6.65 13.35 8.225 14.35Q9.8 15.35 12 15.35ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialVignetteSharpW100.displayName = 'AmauiIconMaterialVignetteSharpW100';

export default IconMaterialVignetteSharpW100;
