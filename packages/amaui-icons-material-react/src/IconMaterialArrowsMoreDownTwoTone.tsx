import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownTwoTone'
      short_name='ArrowsMoreDown'

      {...props}
    >
      <path d="M4.4 21.6V9.575h3.025v9h9V21.6Zm5.15-5.15V4.425h3.025v9h9v3.025Z"/>
    </Icon>
  )
});

export default IconMaterialArrowsMoreDownTwoTone;
