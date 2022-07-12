import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShortTextTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortTextTwoTone'
      short_name='ShortText'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M4 9h16v2H4zm0 4h10v2H4z"/>
    </Icon>
  )
});

export default IconMaterialShortTextTwoTone;
