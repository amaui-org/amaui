import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoiseControlOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoiseControlOffRounded'
      short_name='NoiseControlOff'

      {...props}
    >
      <path d="M12 17Q9.925 17 8.463 15.537Q7 14.075 7 12Q7 9.925 8.463 8.462Q9.925 7 12 7Q14.075 7 15.538 8.462Q17 9.925 17 12Q17 14.075 15.538 15.537Q14.075 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialNoiseControlOffRounded.displayName = 'AmauiIconMaterialNoiseControlOffRounded';

export default IconMaterialNoiseControlOffRounded;
