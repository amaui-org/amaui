import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRiceBowlSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RiceBowlSharpFilled'
      short_name='RiceBowl'

      {...props}
    >
      <path d="M8 22V20.25Q5.35 19.2 3.675 17Q2 14.8 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.8 20.325 17Q18.65 19.2 16 20.25V22ZM10 12H14V4.25Q13.5 4.125 13.012 4.062Q12.525 4 12 4Q11.475 4 10.988 4.062Q10.5 4.125 10 4.25ZM4 12H8V5.075Q6.2 6.125 5.1 7.938Q4 9.75 4 12ZM16 12H20Q20 9.75 18.9 7.938Q17.8 6.125 16 5.075Z"/>
    </Icon>
  );
});

IconMaterialRiceBowlSharpFilled.displayName = 'AmauiIconMaterialRiceBowlSharpFilled';

export default IconMaterialRiceBowlSharpFilled;
