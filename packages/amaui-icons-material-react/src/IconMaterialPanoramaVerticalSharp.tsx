import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanoramaVerticalSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalSharp'
      short_name='PanoramaVertical'

      {...props}
    >
      <path d="M3.5 22Q4.375 20.125 4.938 17.5Q5.5 14.875 5.5 12Q5.5 9.125 4.938 6.5Q4.375 3.875 3.5 2H20.525Q19.65 3.875 19.075 6.5Q18.5 9.125 18.5 12Q18.5 14.875 19.075 17.5Q19.65 20.125 20.525 22ZM17.65 20Q17.075 18.05 16.788 16.038Q16.5 14.025 16.5 12Q16.5 9.975 16.788 7.962Q17.075 5.95 17.65 4H6.375Q6.95 5.95 7.225 7.962Q7.5 9.975 7.5 12Q7.5 14.025 7.225 16.038Q6.95 18.05 6.375 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalSharp.displayName = 'AmauiIconMaterialPanoramaVerticalSharp';

export default IconMaterialPanoramaVerticalSharp;
