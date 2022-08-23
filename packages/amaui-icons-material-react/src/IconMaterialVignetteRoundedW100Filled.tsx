import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVignetteRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteRoundedW100Filled'
      short_name='Vignette'

      {...props}
    >
      <path d="M12 15.35Q14.2 15.35 15.775 14.35Q17.35 13.35 17.35 12Q17.35 10.65 15.775 9.65Q14.2 8.65 12 8.65Q9.8 8.65 8.225 9.65Q6.65 10.65 6.65 12Q6.65 13.35 8.225 14.35Q9.8 15.35 12 15.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialVignetteRoundedW100Filled.displayName = 'AmauiIconMaterialVignetteRoundedW100Filled';

export default IconMaterialVignetteRoundedW100Filled;
