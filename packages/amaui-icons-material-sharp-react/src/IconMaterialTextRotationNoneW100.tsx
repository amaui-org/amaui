import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationNoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationNoneW100'

      short_name='TextRotationNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 18.35v-.7h14.1l-1.7-1.7.5-.5L20.1 18l-2.55 2.55-.5-.5 1.7-1.7Zm3.175-4.8 3.85-10.1h.7l3.75 10.1h-.75l-1.05-2.85h-4.7l-1.05 2.85Zm2.05-3.5h4.2l-2-5.5h-.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotationNoneW100.displayName = 'AmauiIconMaterialTextRotationNoneW100';

export default IconMaterialTextRotationNoneW100;
