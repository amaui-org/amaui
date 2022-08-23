import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRotateRightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateRightSharp'
      short_name='RotateRight'

      {...props}
    >
      <path d="M21 12.05H18.95Q18.825 11.2 18.5 10.387Q18.175 9.575 17.65 8.85L19.1 7.45Q19.9 8.425 20.375 9.6Q20.85 10.775 21 12.05ZM13.05 22V19.95Q13.9 19.825 14.713 19.5Q15.525 19.175 16.25 18.65L17.65 20.1Q16.6 20.9 15.45 21.387Q14.3 21.875 13.05 22ZM19.1 18.65 17.65 17.25Q18.175 16.525 18.5 15.712Q18.825 14.9 18.95 14.05H21Q20.875 15.3 20.388 16.45Q19.9 17.6 19.1 18.65ZM11.05 22Q7.6 21.55 5.325 19.013Q3.05 16.475 3.05 13.05Q3.05 9.3 5.675 6.675Q8.3 4.05 12.05 4.05H12.2L10.65 2.5L12.05 1.05L16.05 5.05L12.05 9.05L10.65 7.65L12.25 6.05H12.05Q9.125 6.05 7.088 8.088Q5.05 10.125 5.05 13.05Q5.05 15.65 6.75 17.613Q8.45 19.575 11.05 19.95Z"/>
    </Icon>
  );
});

IconMaterialRotateRightSharp.displayName = 'AmauiIconMaterialRotateRightSharp';

export default IconMaterialRotateRightSharp;
