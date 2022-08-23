import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalRoundedFilled'
      short_name='PanoramaHorizontal'

      {...props}
    >
      <path d="M3 20Q2.575 20 2.288 19.712Q2 19.425 2 19V5Q2 4.575 2.288 4.287Q2.575 4 3 4Q3.425 4 5.725 4.75Q8.025 5.5 12 5.5Q16 5.5 18.288 4.75Q20.575 4 21 4Q21.425 4 21.712 4.287Q22 4.575 22 5V19Q22 19.425 21.712 19.712Q21.425 20 21 20Q20.575 20 18.288 19.25Q16 18.5 12 18.5Q8.025 18.5 5.725 19.25Q3.425 20 3 20Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalRoundedFilled.displayName = 'AmauiIconMaterialPanoramaHorizontalRoundedFilled';

export default IconMaterialPanoramaHorizontalRoundedFilled;
