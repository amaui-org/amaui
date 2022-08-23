import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaVerticalSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalSharpW100Filled'
      short_name='PanoramaVertical'

      {...props}
    >
      <path d="M5.475 20.725Q6.05 18.7 6.413 16.688Q6.775 14.675 6.775 12.025Q6.775 9.375 6.413 7.362Q6.05 5.35 5.475 3.325H18.525Q17.95 5.35 17.562 7.362Q17.175 9.375 17.175 12.025Q17.175 14.675 17.562 16.688Q17.95 18.7 18.525 20.725Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalSharpW100Filled.displayName = 'AmauiIconMaterialPanoramaVerticalSharpW100Filled';

export default IconMaterialPanoramaVerticalSharpW100Filled;
