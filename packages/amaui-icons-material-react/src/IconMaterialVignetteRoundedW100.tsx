import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVignetteRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteRoundedW100'
      short_name='Vignette'

      {...props}
    >
      <path d="M12 15.35Q14.2 15.35 15.775 14.35Q17.35 13.35 17.35 12Q17.35 10.65 15.775 9.65Q14.2 8.65 12 8.65Q9.8 8.65 8.225 9.65Q6.65 10.65 6.65 12Q6.65 13.35 8.225 14.35Q9.8 15.35 12 15.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4 18Q4 18 4 17.775Q4 17.55 4 17.2V6.8Q4 6.45 4 6.225Q4 6 4 6Q4 6 4 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4 17.775Q4 18 4 18ZM4.8 18H19.2Q19.5 18 19.75 17.75Q20 17.5 20 17.2V6.8Q20 6.5 19.75 6.25Q19.5 6 19.2 6H4.8Q4.5 6 4.25 6.25Q4 6.5 4 6.8V17.2Q4 17.5 4.25 17.75Q4.5 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialVignetteRoundedW100.displayName = 'AmauiIconMaterialVignetteRoundedW100';

export default IconMaterialVignetteRoundedW100;
