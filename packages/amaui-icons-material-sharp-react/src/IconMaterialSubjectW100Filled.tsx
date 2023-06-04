import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubjectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectW100Filled'

      short_name='Subject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 18.35v-.7h8.7v.7Zm0-4v-.7h14.7v.7Zm0-4v-.7h14.7v.7Zm0-4v-.7h14.7v.7Z"/>
    </Icon>
  );
});

IconMaterialSubjectW100Filled.displayName = 'AmauiIconMaterialSubjectW100Filled';

export default IconMaterialSubjectW100Filled;
