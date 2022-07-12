import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop169TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169TwoTone'
      short_name='Crop169'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>
    </Icon>
  )
});

export default IconMaterialCrop169TwoTone;
