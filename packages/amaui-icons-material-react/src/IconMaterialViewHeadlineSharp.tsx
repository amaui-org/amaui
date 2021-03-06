import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewHeadlineSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewHeadlineSharp'
      short_name='ViewHeadline'

      {...props}
    >
      <path d="M4 15V13H20V15ZM4 19V17H20V19ZM4 11V9H20V11ZM4 7V5H20V7Z"/>
    </Icon>
  );
});

export default IconMaterialViewHeadlineSharp;
