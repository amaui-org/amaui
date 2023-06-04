import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubjectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectFilled'

      short_name='Subject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19v-2h10v2Zm0-4v-2h16v2Zm0-4V9h16v2Zm0-4V5h16v2Z"/>
    </Icon>
  );
});

IconMaterialSubjectFilled.displayName = 'AmauiIconMaterialSubjectFilled';

export default IconMaterialSubjectFilled;
