import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTopTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopTwoTone'
      short_name='VerticalAlignTop'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z"/>
    </Icon>
  )
});

export default IconMaterialVerticalAlignTopTwoTone;
