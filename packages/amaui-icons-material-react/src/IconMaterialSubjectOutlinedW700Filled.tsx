import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubjectOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectOutlinedW700Filled'
      short_name='Subject'

      {...props}
    >
      <path d="M3.225 20.725V17.575H14.775V20.725ZM3.225 11.2V8.05H20.775V11.2ZM3.225 15.95V12.8H20.775V15.95ZM3.225 6.425V3.275H20.775V6.425Z"/>
    </Icon>
  )
});

export default IconMaterialSubjectOutlinedW700Filled;
