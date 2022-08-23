import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConnectWithoutContactRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectWithoutContactRounded'
      short_name='ConnectWithoutContact'

      {...props}
    >
      <path d="M9 14Q9 10.25 11.625 7.625Q14.25 5 18 5V7Q15.075 7 13.038 9.037Q11 11.075 11 14ZM13 14Q13 11.925 14.463 10.462Q15.925 9 18 9V11Q16.75 11 15.875 11.875Q15 12.75 15 14ZM5 6Q4.175 6 3.587 5.412Q3 4.825 3 4Q3 3.175 3.587 2.587Q4.175 2 5 2Q5.825 2 6.412 2.587Q7 3.175 7 4Q7 4.825 6.412 5.412Q5.825 6 5 6ZM2 11V8.5Q2 7.875 2.438 7.438Q2.875 7 3.5 7H6.5Q7.625 7 8.438 6.287Q9.25 5.575 9.45 4.5H11.45Q11.3 6 10.35 7.15Q9.4 8.3 8 8.75V11ZM19 17Q18.175 17 17.587 16.413Q17 15.825 17 15Q17 14.175 17.587 13.587Q18.175 13 19 13Q19.825 13 20.413 13.587Q21 14.175 21 15Q21 15.825 20.413 16.413Q19.825 17 19 17ZM16 22V19.75Q14.6 19.3 13.65 18.15Q12.7 17 12.55 15.5H14.55Q14.75 16.575 15.562 17.288Q16.375 18 17.5 18H20.5Q21.125 18 21.562 18.438Q22 18.875 22 19.5V22Z"/>
    </Icon>
  );
});

IconMaterialConnectWithoutContactRounded.displayName = 'AmauiIconMaterialConnectWithoutContactRounded';

export default IconMaterialConnectWithoutContactRounded;
