import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUppercaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UppercaseW100'

      short_name='Uppercase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M662-262v-292l-90 90-20-20 124-124 124 124-20 20-90-90v292h-28Zm-482 0 146-400h33l148 400h-34l-42-120H254l-41 120h-33Zm85-148h156l-77-217h-2l-77 217Z"/>
    </Icon>
  );
});

IconMaterialUppercaseW100.displayName = 'AmauiIconMaterialUppercaseW100';

export default IconMaterialUppercaseW100;
