import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaWideAngleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngleRoundedFilled'
      short_name='PanoramaWideAngle'

      {...props}
    >
      <path d="M12 20Q9.725 20 7.463 19.788Q5.2 19.575 3 19Q2.475 17.275 2.237 15.537Q2 13.8 2 12Q2 10.2 2.237 8.462Q2.475 6.725 3 5Q4.975 4.5 7.2 4.25Q9.425 4 12 4Q14.575 4 16.8 4.25Q19.025 4.5 21 5Q21.525 6.725 21.763 8.462Q22 10.2 22 12Q22 13.8 21.75 15.537Q21.5 17.275 21 19Q18.8 19.575 16.538 19.788Q14.275 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngleRoundedFilled.displayName = 'AmauiIconMaterialPanoramaWideAngleRoundedFilled';

export default IconMaterialPanoramaWideAngleRoundedFilled;
