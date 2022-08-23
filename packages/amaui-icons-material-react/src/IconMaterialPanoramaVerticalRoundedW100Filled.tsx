import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaVerticalRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalRoundedW100Filled'
      short_name='PanoramaVertical'

      {...props}
    >
      <path d="M6.375 20.725Q5.925 20.725 5.763 20.438Q5.6 20.15 5.725 19.775Q6.075 18.6 6.425 16.625Q6.775 14.65 6.775 12.025Q6.775 9.375 6.425 7.438Q6.075 5.5 5.725 4.325Q5.6 3.95 5.763 3.637Q5.925 3.325 6.375 3.325H17.625Q18.075 3.325 18.238 3.637Q18.4 3.95 18.275 4.325Q17.925 5.5 17.55 7.438Q17.175 9.375 17.175 12.025Q17.175 14.65 17.562 16.625Q17.95 18.6 18.275 19.775Q18.4 20.15 18.238 20.438Q18.075 20.725 17.625 20.725Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalRoundedW100Filled.displayName = 'AmauiIconMaterialPanoramaVerticalRoundedW100Filled';

export default IconMaterialPanoramaVerticalRoundedW100Filled;
