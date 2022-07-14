import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3SharpFilled'
      short_name='Man3'

      {...props}
    >
      <path d="M10 22.25v-7H8v-8h8v8h-2v7ZM12 6.5 9.75 4.25 12 2l2.25 2.25Z"/>
    </Icon>
  );
});

export default IconMaterialMan3SharpFilled;
