import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubjectTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectTwoTone'
      short_name='Subject'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/>
    </Icon>
  );
});

export default IconMaterialSubjectTwoTone;
