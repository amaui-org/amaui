import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneOutlineSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineSharpFilled'
      short_name='DoneOutline'

      {...props}
    >
      <path d="M9.525 18 20.125 7.4 18.7 6 9.5 15.175 5.275 10.925 3.85 12.35ZM9.525 20.825 1.05 12.35 5.275 8.1 9.525 12.35 18.675 3.175 22.975 7.375Z"/>
    </Icon>
  );
});

export default IconMaterialDoneOutlineSharpFilled;
