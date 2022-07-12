import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubjectOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectOutlined'
      short_name='Subject'

      {...props}
    >
      <path d="M4 19V17H14V19ZM4 11V9H20V11ZM4 15V13H20V15ZM4 7V5H20V7Z"/>
    </Icon>
  )
});

export default IconMaterialSubjectOutlined;
