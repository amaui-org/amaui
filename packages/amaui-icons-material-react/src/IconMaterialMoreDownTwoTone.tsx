import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreDownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreDownTwoTone'
      short_name='MoreDown'

      {...props}
    >
      <path d="M4.3 19.7V7.675h3.025v9h9V19.7Zm5.4-5.4V2.275h3.025v9h9V14.3Z"/>
    </Icon>
  )
});

export default IconMaterialMoreDownTwoTone;
