import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTollSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollSharpFilled'
      short_name='Toll'

      {...props}
    >
      <path d="M15 20Q11.65 20 9.325 17.675Q7 15.35 7 12Q7 8.65 9.325 6.325Q11.65 4 15 4Q18.35 4 20.675 6.325Q23 8.65 23 12Q23 15.35 20.675 17.675Q18.35 20 15 20ZM7 19.75Q4.35 19.05 2.675 16.9Q1 14.75 1 12Q1 9.25 2.675 7.1Q4.35 4.95 7 4.25V6.35Q5.2 6.975 4.1 8.525Q3 10.075 3 12Q3 13.925 4.1 15.475Q5.2 17.025 7 17.65Z"/>
    </Icon>
  );
});

IconMaterialTollSharpFilled.displayName = 'AmauiIconMaterialTollSharpFilled';

export default IconMaterialTollSharpFilled;
