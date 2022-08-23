import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalRoundedW100Filled'
      short_name='PanoramaHorizontal'

      {...props}
    >
      <path d="M4.25 18.3Q3.875 18.425 3.588 18.263Q3.3 18.1 3.3 17.65V6.4Q3.3 5.95 3.588 5.787Q3.875 5.625 4.25 5.75Q5.425 6.075 7.4 6.438Q9.375 6.8 12 6.8Q14.65 6.8 16.588 6.45Q18.525 6.1 19.7 5.75Q20.075 5.625 20.388 5.787Q20.7 5.95 20.7 6.4V17.65Q20.7 18.1 20.388 18.263Q20.075 18.425 19.7 18.3Q18.525 17.95 16.588 17.575Q14.65 17.2 12 17.2Q9.375 17.2 7.4 17.575Q5.425 17.95 4.25 18.3Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalRoundedW100Filled.displayName = 'AmauiIconMaterialPanoramaHorizontalRoundedW100Filled';

export default IconMaterialPanoramaHorizontalRoundedW100Filled;
