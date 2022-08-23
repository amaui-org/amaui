import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksSharpFilled'
      short_name='Looks'

      {...props}
    >
      <path d="M5 17Q5 14.1 7.05 12.05Q9.1 10 12 10Q14.9 10 16.95 12.05Q19 14.1 19 17H17Q17 14.925 15.538 13.462Q14.075 12 12 12Q9.925 12 8.463 13.462Q7 14.925 7 17ZM1 17Q1 14.725 1.863 12.725Q2.725 10.725 4.225 9.225Q5.725 7.725 7.725 6.862Q9.725 6 12 6Q14.275 6 16.275 6.862Q18.275 7.725 19.775 9.225Q21.275 10.725 22.138 12.725Q23 14.725 23 17H21Q21 13.275 18.363 10.637Q15.725 8 12 8Q8.275 8 5.638 10.637Q3 13.275 3 17Z"/>
    </Icon>
  );
});

IconMaterialLooksSharpFilled.displayName = 'AmauiIconMaterialLooksSharpFilled';

export default IconMaterialLooksSharpFilled;
