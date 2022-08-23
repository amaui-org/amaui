import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVignetteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteRoundedFilled'
      short_name='Vignette'

      {...props}
    >
      <path d="M12 16Q14.45 16 16.225 14.812Q18 13.625 18 12Q18 10.375 16.225 9.188Q14.45 8 12 8Q9.55 8 7.775 9.188Q6 10.375 6 12Q6 13.625 7.775 14.812Q9.55 16 12 16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialVignetteRoundedFilled.displayName = 'AmauiIconMaterialVignetteRoundedFilled';

export default IconMaterialVignetteRoundedFilled;
