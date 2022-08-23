import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMyLocationSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MyLocationSharpW100'
      short_name='MyLocation'

      {...props}
    >
      <path d="M11.65 21.05V19.75Q8.525 19.475 6.55 17.5Q4.575 15.525 4.3 12.4H3V11.7H4.3Q4.575 8.575 6.55 6.6Q8.525 4.625 11.65 4.35V3.05H12.35V4.35Q15.475 4.625 17.45 6.6Q19.425 8.575 19.7 11.7H21V12.4H19.7Q19.425 15.525 17.45 17.5Q15.475 19.475 12.35 19.75V21.05ZM12 19.05Q14.9 19.05 16.95 17Q19 14.95 19 12.05Q19 9.15 16.95 7.1Q14.9 5.05 12 5.05Q9.1 5.05 7.05 7.1Q5 9.15 5 12.05Q5 14.95 7.05 17Q9.1 19.05 12 19.05ZM12 14.75Q10.875 14.75 10.088 13.962Q9.3 13.175 9.3 12.05Q9.3 10.925 10.088 10.137Q10.875 9.35 12 9.35Q13.125 9.35 13.913 10.137Q14.7 10.925 14.7 12.05Q14.7 13.175 13.913 13.962Q13.125 14.75 12 14.75Z"/>
    </Icon>
  );
});

IconMaterialMyLocationSharpW100.displayName = 'AmauiIconMaterialMyLocationSharpW100';

export default IconMaterialMyLocationSharpW100;
