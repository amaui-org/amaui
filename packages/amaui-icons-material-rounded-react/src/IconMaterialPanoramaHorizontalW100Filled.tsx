import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalW100Filled'

      short_name='PanoramaHorizontal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.25 18.3q-.375.125-.662-.037Q3.3 18.1 3.3 17.65V6.4q0-.45.288-.613.287-.162.662-.037 1.175.325 3.15.688Q9.375 6.8 12 6.8q2.65 0 4.588-.35 1.937-.35 3.112-.7.375-.125.688.037.312.163.312.613v11.25q0 .45-.312.613-.313.162-.688.037-1.175-.35-3.112-.725Q14.65 17.2 12 17.2q-2.625 0-4.6.375-1.975.375-3.15.725Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalW100Filled.displayName = 'AmauiIconMaterialPanoramaHorizontalW100Filled';

export default IconMaterialPanoramaHorizontalW100Filled;
