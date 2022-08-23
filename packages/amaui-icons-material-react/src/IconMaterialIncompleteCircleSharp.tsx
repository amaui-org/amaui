import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIncompleteCircleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IncompleteCircleSharp'
      short_name='IncompleteCircle'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.9 2.775 8.087Q3.55 6.275 4.9 4.9L12 12V2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialIncompleteCircleSharp.displayName = 'AmauiIconMaterialIncompleteCircleSharp';

export default IconMaterialIncompleteCircleSharp;
