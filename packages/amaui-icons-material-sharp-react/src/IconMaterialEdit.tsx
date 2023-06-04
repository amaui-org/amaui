import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Edit'

      short_name='Edit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2L17.875 1.9 22.1 6.125ZM3 21v-4.25l10.6-10.6 4.25 4.25L7.25 21ZM14.325 9.675l-.7-.7 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialEdit.displayName = 'AmauiIconMaterialEdit';

export default IconMaterialEdit;
