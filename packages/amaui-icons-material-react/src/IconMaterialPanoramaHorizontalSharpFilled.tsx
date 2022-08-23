import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalSharpFilled'
      short_name='PanoramaHorizontal'

      {...props}
    >
      <path d="M2.025 20.5V3.475Q3.9 4.35 6.525 4.925Q9.15 5.5 12.025 5.5Q14.9 5.5 17.525 4.925Q20.15 4.35 22.025 3.475V20.5Q20.15 19.625 17.525 19.062Q14.9 18.5 12.025 18.5Q9.15 18.5 6.525 19.062Q3.9 19.625 2.025 20.5Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalSharpFilled.displayName = 'AmauiIconMaterialPanoramaHorizontalSharpFilled';

export default IconMaterialPanoramaHorizontalSharpFilled;
