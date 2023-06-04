import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditFilled'

      short_name='Edit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.3 8.925-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387.075-.188.225-.338l10.3-10.3 4.25 4.25-10.3 10.3q-.15.15-.337.225-.188.075-.388.075Z"/>
    </Icon>
  );
});

IconMaterialEditFilled.displayName = 'AmauiIconMaterialEditFilled';

export default IconMaterialEditFilled;
