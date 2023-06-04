import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridViewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewFilled'

      short_name='GridView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 11V3h8v8Zm0 10v-8h8v8Zm10-10V3h8v8Zm0 10v-8h8v8Z"/>
    </Icon>
  );
});

IconMaterialGridViewFilled.displayName = 'AmauiIconMaterialGridViewFilled';

export default IconMaterialGridViewFilled;
