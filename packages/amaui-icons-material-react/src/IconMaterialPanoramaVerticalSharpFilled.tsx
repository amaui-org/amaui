import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaVerticalSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalSharpFilled'
      short_name='PanoramaVertical'

      {...props}
    >
      <path d="M3.5 22Q4.375 20.125 4.938 17.5Q5.5 14.875 5.5 12Q5.5 9.125 4.938 6.5Q4.375 3.875 3.5 2H20.525Q19.65 3.875 19.075 6.5Q18.5 9.125 18.5 12Q18.5 14.875 19.075 17.5Q19.65 20.125 20.525 22Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalSharpFilled.displayName = 'AmauiIconMaterialPanoramaVerticalSharpFilled';

export default IconMaterialPanoramaVerticalSharpFilled;
