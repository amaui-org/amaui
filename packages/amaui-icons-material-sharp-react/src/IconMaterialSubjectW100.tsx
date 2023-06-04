import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubjectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectW100'

      short_name='Subject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 18.35v-.7h8.7v.7Zm0-4v-.7h14.7v.7Zm0-4v-.7h14.7v.7Zm0-4v-.7h14.7v.7Z"/>
    </Icon>
  );
});

IconMaterialSubjectW100.displayName = 'AmauiIconMaterialSubjectW100';

export default IconMaterialSubjectW100;
