import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandLessTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessTwoTone'
      short_name='ExpandLess'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
    </Icon>
  )
});

export default IconMaterialExpandLessTwoTone;
