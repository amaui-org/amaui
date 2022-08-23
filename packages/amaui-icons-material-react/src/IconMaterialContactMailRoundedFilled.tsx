import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactMailRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailRoundedFilled'
      short_name='ContactMail'

      {...props}
    >
      <path d="M2 21Q1.175 21 0.588 20.413Q0 19.825 0 19V5Q0 4.175 0.588 3.587Q1.175 3 2 3H22Q22.825 3 23.413 3.587Q24 4.175 24 5V19Q24 19.825 23.413 20.413Q22.825 21 22 21ZM9 14Q10.25 14 11.125 13.125Q12 12.25 12 11Q12 9.75 11.125 8.875Q10.25 8 9 8Q7.75 8 6.875 8.875Q6 9.75 6 11Q6 12.25 6.875 13.125Q7.75 14 9 14ZM15 11H20Q20.425 11 20.712 10.712Q21 10.425 21 10V7Q21 6.575 20.712 6.287Q20.425 6 20 6H15Q14.575 6 14.288 6.287Q14 6.575 14 7V10Q14 10.425 14.288 10.712Q14.575 11 15 11ZM17.5 9.75 15 8V7L17.5 8.75L20 7V8ZM2.1 19H15.9Q14.85 17.125 13 16.062Q11.15 15 9 15Q6.85 15 5 16.062Q3.15 17.125 2.1 19Z"/>
    </Icon>
  );
});

IconMaterialContactMailRoundedFilled.displayName = 'AmauiIconMaterialContactMailRoundedFilled';

export default IconMaterialContactMailRoundedFilled;
