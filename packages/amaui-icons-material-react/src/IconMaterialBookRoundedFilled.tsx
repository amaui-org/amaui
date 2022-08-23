import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookRoundedFilled'
      short_name='Book'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM11.75 10.55 13.5 9.5 15.25 10.55Q15.5 10.7 15.75 10.55Q16 10.4 16 10.125V4H11V10.125Q11 10.4 11.25 10.55Q11.5 10.7 11.75 10.55Z"/>
    </Icon>
  );
});

IconMaterialBookRoundedFilled.displayName = 'AmauiIconMaterialBookRoundedFilled';

export default IconMaterialBookRoundedFilled;
