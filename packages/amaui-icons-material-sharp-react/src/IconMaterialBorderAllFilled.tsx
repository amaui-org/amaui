import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllFilled'

      short_name='BorderAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 3h8v8h-8Zm0 18v-8h8v8ZM3 11V3h8v8Zm0 10v-8h8v8Z"/>
    </Icon>
  );
});

IconMaterialBorderAllFilled.displayName = 'AmauiIconMaterialBorderAllFilled';

export default IconMaterialBorderAllFilled;
