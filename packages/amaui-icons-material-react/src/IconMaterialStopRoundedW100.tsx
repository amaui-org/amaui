import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopRoundedW100'
      short_name='Stop'

      {...props}
    >
      <path d="M8 8V16ZM8.8 16.7Q8.175 16.7 7.738 16.262Q7.3 15.825 7.3 15.2V8.8Q7.3 8.175 7.738 7.737Q8.175 7.3 8.8 7.3H15.2Q15.825 7.3 16.262 7.737Q16.7 8.175 16.7 8.8V15.2Q16.7 15.825 16.262 16.262Q15.825 16.7 15.2 16.7ZM8 16H16V8H8Z"/>
    </Icon>
  );
});

export default IconMaterialStopRoundedW100;
