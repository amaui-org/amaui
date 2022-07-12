import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneAllSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllSharpW700'
      short_name='DoneAll'

      {...props}
    >
      <path d="M6.725 19.6 0.275 13.15 2.475 10.95 6.725 15.2 8.925 17.4ZM12.35 18.8 5.85 12.3 8.1 10.1 12.35 14.35 21.5 5.2 23.75 7.4ZM12.35 12.325 10.15 10.125 15.1 5.175 17.3 7.375Z"/>
    </Icon>
  )
});

export default IconMaterialDoneAllSharpW700;
