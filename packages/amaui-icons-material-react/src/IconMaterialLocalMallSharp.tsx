import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalMallSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallSharp'
      short_name='LocalMall'

      {...props}
    >
      <path d="M3 22V6H7Q7 3.925 8.463 2.462Q9.925 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6H21V22ZM9 6H15Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.75 3 9.875 3.875Q9 4.75 9 6ZM5 20H19V8H5ZM12 14Q14.075 14 15.538 12.537Q17 11.075 17 9H15Q15 10.25 14.125 11.125Q13.25 12 12 12Q10.75 12 9.875 11.125Q9 10.25 9 9H7Q7 11.075 8.463 12.537Q9.925 14 12 14ZM5 8V20Z"/>
    </Icon>
  );
});

IconMaterialLocalMallSharp.displayName = 'AmauiIconMaterialLocalMallSharp';

export default IconMaterialLocalMallSharp;
