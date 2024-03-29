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
      <path d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387.075-.188.225-.338l10.3-10.3 4.25 4.25-10.3 10.3q-.15.15-.337.225-.188.075-.388.075ZM14.325 9.675l-.7-.7 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialEdit.displayName = 'AmauiIconMaterialEdit';

export default IconMaterialEdit;
