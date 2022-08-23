import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTollSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollSharp'
      short_name='Toll'

      {...props}
    >
      <path d="M15 20Q11.65 20 9.325 17.675Q7 15.35 7 12Q7 8.65 9.325 6.325Q11.65 4 15 4Q18.35 4 20.675 6.325Q23 8.65 23 12Q23 15.35 20.675 17.675Q18.35 20 15 20ZM7 19.75Q4.35 19.05 2.675 16.9Q1 14.75 1 12Q1 9.25 2.675 7.1Q4.35 4.95 7 4.25V6.35Q5.2 6.975 4.1 8.525Q3 10.075 3 12Q3 13.925 4.1 15.475Q5.2 17.025 7 17.65ZM15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12ZM15 18Q17.5 18 19.25 16.25Q21 14.5 21 12Q21 9.5 19.25 7.75Q17.5 6 15 6Q12.5 6 10.75 7.75Q9 9.5 9 12Q9 14.5 10.75 16.25Q12.5 18 15 18Z"/>
    </Icon>
  );
});

IconMaterialTollSharp.displayName = 'AmauiIconMaterialTollSharp';

export default IconMaterialTollSharp;
