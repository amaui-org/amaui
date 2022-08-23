import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTourSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourSharpW100'
      short_name='Tour'

      {...props}
    >
      <path d="M5.65 21.35V2.65H6.35V4.65H20.05L18.3 9L20.05 13.35H6.35V21.35ZM6.35 5.35V9V12.65ZM12.5 10.35Q13.075 10.35 13.463 9.962Q13.85 9.575 13.85 9Q13.85 8.425 13.463 8.037Q13.075 7.65 12.5 7.65Q11.925 7.65 11.538 8.037Q11.15 8.425 11.15 9Q11.15 9.575 11.538 9.962Q11.925 10.35 12.5 10.35ZM6.35 12.65H19L17.55 9L19 5.35H6.35Z"/>
    </Icon>
  );
});

IconMaterialTourSharpW100.displayName = 'AmauiIconMaterialTourSharpW100';

export default IconMaterialTourSharpW100;
