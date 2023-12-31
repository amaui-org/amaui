import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowLeftAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftAltW100'

      short_name='ArrowLeftAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M395-276 191-480l204-204 20 20-170 170h524v28H245l170 170-20 20Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftAltW100.displayName = 'AmauiIconMaterialArrowLeftAltW100';

export default IconMaterialArrowLeftAltW100;
