import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalSharp'
      short_name='PanoramaHorizontal'

      {...props}
    >
      <path d="M4 17.65Q5.95 17.075 7.963 16.788Q9.975 16.5 12 16.5Q14.025 16.5 16.038 16.788Q18.05 17.075 20 17.65V6.375Q18.05 6.95 16.038 7.225Q14.025 7.5 12 7.5Q9.975 7.5 7.963 7.225Q5.95 6.95 4 6.375ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM2.025 20.5V3.475Q3.9 4.35 6.525 4.925Q9.15 5.5 12.025 5.5Q14.9 5.5 17.525 4.925Q20.15 4.35 22.025 3.475V20.5Q20.15 19.625 17.525 19.062Q14.9 18.5 12.025 18.5Q9.15 18.5 6.525 19.062Q3.9 19.625 2.025 20.5Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalSharp.displayName = 'AmauiIconMaterialPanoramaHorizontalSharp';

export default IconMaterialPanoramaHorizontalSharp;
