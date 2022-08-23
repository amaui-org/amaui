import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrAutoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoSharpFilled'
      short_name='HdrAuto'

      {...props}
    >
      <path d="M6.9 17H8.8L9.8 14.2H14.2L15.2 17H17.1L13 6H11ZM10.35 12.6 11.95 8.05H12.05L13.65 12.6ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoSharpFilled.displayName = 'AmauiIconMaterialHdrAutoSharpFilled';

export default IconMaterialHdrAutoSharpFilled;
