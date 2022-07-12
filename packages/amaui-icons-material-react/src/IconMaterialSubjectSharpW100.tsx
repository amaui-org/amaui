import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubjectSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectSharpW100'
      short_name='Subject'

      {...props}
    >
      <path d="M4.65 18.35V17.65H13.35V18.35ZM4.65 10.35V9.65H19.35V10.35ZM4.65 14.35V13.65H19.35V14.35ZM4.65 6.35V5.65H19.35V6.35Z"/>
    </Icon>
  )
});

export default IconMaterialSubjectSharpW100;
