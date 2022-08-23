import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWineBarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarSharpW100'
      short_name='WineBar'

      {...props}
    >
      <path d="M8.9 19.7V19H11.65V14.35Q9.5 14.025 8.325 12.512Q7.15 11 7.15 9V4.3H16.85V9Q16.85 11 15.675 12.512Q14.5 14.025 12.35 14.35V19H15.1V19.7ZM12 13.65Q13.625 13.65 14.825 12.4Q16.025 11.15 16.15 9.35H7.85Q7.975 11.15 9.175 12.4Q10.375 13.65 12 13.65ZM7.85 8.65H16.15V5H7.85ZM12 13.65Q12 13.65 12 13.65Q12 13.65 12 13.65Q12 13.65 12 13.65Q12 13.65 12 13.65Z"/>
    </Icon>
  );
});

IconMaterialWineBarSharpW100.displayName = 'AmauiIconMaterialWineBarSharpW100';

export default IconMaterialWineBarSharpW100;
