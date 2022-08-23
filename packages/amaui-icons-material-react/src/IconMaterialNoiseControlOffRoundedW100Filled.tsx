import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoiseControlOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoiseControlOffRoundedW100Filled'
      short_name='NoiseControlOff'

      {...props}
    >
      <path d="M12 16.35Q10.2 16.35 8.925 15.075Q7.65 13.8 7.65 12Q7.65 10.2 8.925 8.925Q10.2 7.65 12 7.65Q13.8 7.65 15.075 8.925Q16.35 10.2 16.35 12Q16.35 13.8 15.075 15.075Q13.8 16.35 12 16.35Z"/>
    </Icon>
  );
});

IconMaterialNoiseControlOffRoundedW100Filled.displayName = 'AmauiIconMaterialNoiseControlOffRoundedW100Filled';

export default IconMaterialNoiseControlOffRoundedW100Filled;
