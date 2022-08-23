import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRotateLeftSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateLeftSharp'
      short_name='RotateLeft'

      {...props}
    >
      <path d="M3.05 12.05Q3.2 10.775 3.675 9.6Q4.15 8.425 4.95 7.45L6.4 8.85Q5.875 9.575 5.55 10.387Q5.225 11.2 5.1 12.05ZM11 22Q9.75 21.875 8.6 21.387Q7.45 20.9 6.4 20.1L7.8 18.65Q8.525 19.175 9.338 19.5Q10.15 19.825 11 19.95ZM4.95 18.65Q4.15 17.6 3.663 16.45Q3.175 15.3 3.05 14.05H5.1Q5.225 14.9 5.55 15.712Q5.875 16.525 6.4 17.25ZM13 22V19.95Q15.6 19.575 17.3 17.613Q19 15.65 19 13.05Q19 10.125 16.962 8.088Q14.925 6.05 12 6.05H11.8L13.4 7.65L12 9.05L8 5.05L12 1.05L13.4 2.5L11.85 4.05H12Q15.75 4.05 18.375 6.675Q21 9.3 21 13.05Q21 16.475 18.725 19.013Q16.45 21.55 13 22Z"/>
    </Icon>
  );
});

IconMaterialRotateLeftSharp.displayName = 'AmauiIconMaterialRotateLeftSharp';

export default IconMaterialRotateLeftSharp;
