import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrandingWatermarkRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkRoundedW100Filled'
      short_name='BrandingWatermark'

      {...props}
    >
      <path d="M11.4 16.35H17.6Q17.925 16.35 18.138 16.137Q18.35 15.925 18.35 15.6V11.5Q18.35 11.175 18.138 10.962Q17.925 10.75 17.6 10.75H11.4Q11.075 10.75 10.863 10.962Q10.65 11.175 10.65 11.5V15.6Q10.65 15.925 10.863 16.137Q11.075 16.35 11.4 16.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermarkRoundedW100Filled.displayName = 'AmauiIconMaterialBrandingWatermarkRoundedW100Filled';

export default IconMaterialBrandingWatermarkRoundedW100Filled;
