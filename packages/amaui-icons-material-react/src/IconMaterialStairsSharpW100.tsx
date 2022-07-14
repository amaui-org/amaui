import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStairsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsSharpW100'
      short_name='Stairs'

      {...props}
    >
      <path d="M6.65 17.35H9.775V14.025H12.35V10.7H14.925V7.35H17.35V6.65H14.225V9.975H11.65V13.3H9.075V16.65H6.65ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialStairsSharpW100;
