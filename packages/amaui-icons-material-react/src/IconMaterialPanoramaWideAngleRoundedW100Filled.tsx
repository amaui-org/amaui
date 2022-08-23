import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaWideAngleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngleRoundedW100Filled'
      short_name='PanoramaWideAngle'

      {...props}
    >
      <path d="M12 18.7Q9.775 18.7 7.812 18.487Q5.85 18.275 4.05 17.85Q3.65 16.425 3.475 14.963Q3.3 13.5 3.3 12Q3.3 10.5 3.475 9.037Q3.65 7.575 4.05 6.15Q5.85 5.725 7.812 5.512Q9.775 5.3 12 5.3Q14.225 5.3 16.188 5.512Q18.15 5.725 19.95 6.15Q20.35 7.575 20.525 9.037Q20.7 10.5 20.7 12Q20.7 13.5 20.525 14.963Q20.35 16.425 19.95 17.85Q18.15 18.275 16.188 18.487Q14.225 18.7 12 18.7Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngleRoundedW100Filled.displayName = 'AmauiIconMaterialPanoramaWideAngleRoundedW100Filled';

export default IconMaterialPanoramaWideAngleRoundedW100Filled;
