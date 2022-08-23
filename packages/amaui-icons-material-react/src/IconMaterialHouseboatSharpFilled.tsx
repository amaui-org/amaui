import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseboatSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseboatSharpFilled'
      short_name='Houseboat'

      {...props}
    >
      <path d="M2 19V17Q2.95 17 3.4 16.5Q3.85 16 5.325 16Q6.775 16 7.275 16.5Q7.775 17 8.65 17Q9.6 17 10.062 16.5Q10.525 16 12 16Q13.475 16 13.938 16.5Q14.4 17 15.35 17Q16.225 17 16.725 16.5Q17.225 16 18.675 16Q20.15 16 20.6 16.5Q21.05 17 22 17V19Q20.575 19 20.05 18.5Q19.525 18 18.65 18Q17.75 18 17.25 18.5Q16.75 19 15.325 19Q13.85 19 13.4 18.5Q12.95 18 12 18Q11.05 18 10.6 18.5Q10.15 19 8.675 19Q7.25 19 6.75 18.5Q6.25 18 5.35 18Q4.475 18 3.95 18.5Q3.425 19 2 19ZM4.5 15 2.25 12.75 3.65 11.35 5.325 13H7V9.625L5.675 10.6L4.5 9L12 3.5L19.5 9L18.325 10.625L17 9.65V13H18.675L20.35 11.35L21.75 12.75L19.5 15ZM11 13H13V11H11Z"/>
    </Icon>
  );
});

IconMaterialHouseboatSharpFilled.displayName = 'AmauiIconMaterialHouseboatSharpFilled';

export default IconMaterialHouseboatSharpFilled;
