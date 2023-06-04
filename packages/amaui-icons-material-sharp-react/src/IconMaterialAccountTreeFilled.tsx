import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountTreeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeFilled'

      short_name='AccountTree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 21v-3h-4V8H9v3H2V3h7v3h6V3h7v8h-7V8h-2v8h2v-3h7v8Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeFilled.displayName = 'AmauiIconMaterialAccountTreeFilled';

export default IconMaterialAccountTreeFilled;
