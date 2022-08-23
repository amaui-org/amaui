import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRotateLeftSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateLeftSharpW100Filled'
      short_name='RotateLeft'

      {...props}
    >
      <path d="M4.35 12.05Q4.5 10.975 4.9 10.037Q5.3 9.1 5.9 8.35L6.4 8.85Q5.875 9.575 5.537 10.375Q5.2 11.175 5.05 12.05ZM11 20.7Q9.975 20.525 9.038 20.137Q8.1 19.75 7.3 19.15L7.8 18.65Q8.525 19.175 9.338 19.5Q10.15 19.825 11 19.95ZM5.9 17.75Q5.275 16.925 4.875 15.988Q4.475 15.05 4.35 14.05H5.05Q5.2 14.925 5.537 15.725Q5.875 16.525 6.4 17.25ZM13 20.7V20Q15.6 19.575 17.3 17.613Q19 15.65 19 13.05Q19 10.125 16.962 8.088Q14.925 6.05 12 6.05H11.05L13.3 8.3L12.8 8.8L9.7 5.7L12.8 2.6L13.3 3.1L11.05 5.35H12Q15.2 5.35 17.45 7.6Q19.7 9.85 19.7 13.05Q19.7 15.975 17.788 18.15Q15.875 20.325 13 20.7Z"/>
    </Icon>
  );
});

IconMaterialRotateLeftSharpW100Filled.displayName = 'AmauiIconMaterialRotateLeftSharpW100Filled';

export default IconMaterialRotateLeftSharpW100Filled;
