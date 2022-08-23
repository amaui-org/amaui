import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRotateRightSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateRightSharpW100Filled'
      short_name='RotateRight'

      {...props}
    >
      <path d="M19.7 12.05H19Q18.85 11.175 18.513 10.375Q18.175 9.575 17.65 8.85L18.15 8.35Q18.75 9.1 19.15 10.037Q19.55 10.975 19.7 12.05ZM13.05 20.7V19.95Q13.9 19.825 14.713 19.5Q15.525 19.175 16.25 18.65L16.75 19.15Q15.95 19.75 15.013 20.137Q14.075 20.525 13.05 20.7ZM18.15 17.75 17.65 17.25Q18.175 16.525 18.513 15.725Q18.85 14.925 19 14.05H19.7Q19.575 15.05 19.175 15.988Q18.775 16.925 18.15 17.75ZM11.05 20.7Q8.175 20.325 6.263 18.15Q4.35 15.975 4.35 13.05Q4.35 9.85 6.6 7.6Q8.85 5.35 12.05 5.35H13L10.75 3.1L11.25 2.6L14.35 5.7L11.25 8.8L10.75 8.3L13 6.05H12.05Q9.125 6.05 7.088 8.088Q5.05 10.125 5.05 13.05Q5.05 15.65 6.75 17.613Q8.45 19.575 11.05 20Z"/>
    </Icon>
  );
});

IconMaterialRotateRightSharpW100Filled.displayName = 'AmauiIconMaterialRotateRightSharpW100Filled';

export default IconMaterialRotateRightSharpW100Filled;
