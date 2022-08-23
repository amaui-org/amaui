import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapHorizontalCircleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizontalCircleSharpFilled'
      short_name='SwapHorizontalCircle'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM15 14 19 10 15 6 13.6 7.4 15.15 9H11V11H15.15L13.6 12.6ZM9 18 10.4 16.6 8.85 15H13V13H8.85L10.4 11.4L9 10L5 14Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizontalCircleSharpFilled.displayName = 'AmauiIconMaterialSwapHorizontalCircleSharpFilled';

export default IconMaterialSwapHorizontalCircleSharpFilled;
