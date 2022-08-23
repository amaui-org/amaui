import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPlayTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayTwoTone'
      short_name='AutoReadPlay'

      {...props}
    >
      <path d="M11.55 12.975 14.75 10.825Q15.2 10.525 15.2 10Q15.2 9.475 14.75 9.175L11.55 7.025Q11.05 6.675 10.525 6.975Q10 7.275 10 7.875V12.125Q10 12.725 10.525 13.025Q11.05 13.325 11.55 12.975ZM3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6ZM4 17.175 5.175 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16Q4 16 4 16Q4 16 4 16V17.175Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayTwoTone.displayName = 'AmauiIconMaterialAutoReadPlayTwoTone';

export default IconMaterialAutoReadPlayTwoTone;
