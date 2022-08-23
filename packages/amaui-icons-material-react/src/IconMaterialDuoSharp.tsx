import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDuoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DuoSharp'
      short_name='Duo'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q15.35 20 17.675 17.675Q20 15.35 20 12V4Q20 4 20 4Q20 4 20 4H12Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20ZM7 15H14V13L17 15V9L14 11V9H7ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialDuoSharp.displayName = 'AmauiIconMaterialDuoSharp';

export default IconMaterialDuoSharp;
