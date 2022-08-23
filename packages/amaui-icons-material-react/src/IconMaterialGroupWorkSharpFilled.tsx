import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroupWorkSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupWorkSharpFilled'
      short_name='GroupWork'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 10Q12.825 10 13.413 9.412Q14 8.825 14 8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8Q10 8.825 10.588 9.412Q11.175 10 12 10ZM8 16Q8.825 16 9.413 15.412Q10 14.825 10 14Q10 13.175 9.413 12.587Q8.825 12 8 12Q7.175 12 6.588 12.587Q6 13.175 6 14Q6 14.825 6.588 15.412Q7.175 16 8 16ZM16 16Q16.825 16 17.413 15.412Q18 14.825 18 14Q18 13.175 17.413 12.587Q16.825 12 16 12Q15.175 12 14.588 12.587Q14 13.175 14 14Q14 14.825 14.588 15.412Q15.175 16 16 16Z"/>
    </Icon>
  );
});

IconMaterialGroupWorkSharpFilled.displayName = 'AmauiIconMaterialGroupWorkSharpFilled';

export default IconMaterialGroupWorkSharpFilled;
