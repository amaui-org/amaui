import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneOutlineSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineSharpW700'
      short_name='DoneOutline'

      {...props}
    >
      <path d="M9.525 18 20.125 7.4 18.725 6 9.525 15.2 5.25 10.925 3.85 12.325ZM9.525 22.45 -0.575 12.35 5.275 6.5 9.525 10.75 18.725 1.525 24.6 7.375Z"/>
    </Icon>
  )
});

export default IconMaterialDoneOutlineSharpW700;
