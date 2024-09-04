import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUppercaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UppercaseW100Filled'

      short_name='Uppercase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M673-262v-292l-90 90-20-20 124-124 124 124-20 20-90-90v292h-28Zm-501 0 146-400h33l149 400h-34.66L423-382H246l-41 120h-33Zm85-148h156l-77-217h-2l-77 217Z"/>
    </Icon>
  );
});

IconMaterialUppercaseW100Filled.displayName = 'AmauiIconMaterialUppercaseW100Filled';

export default IconMaterialUppercaseW100Filled;
