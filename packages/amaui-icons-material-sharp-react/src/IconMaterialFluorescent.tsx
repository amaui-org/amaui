import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluorescent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fluorescent'

      short_name='Fluorescent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 15.05v-6h14v6ZM11 5V2h2v3Zm7.7 2.8-1.4-1.4 1.8-1.8L20.5 6ZM11 22v-3h2v3Zm8.1-2.5-1.8-1.8 1.4-1.4 1.8 1.8ZM5.3 7.8 3.5 6l1.4-1.4 1.8 1.8Zm-.4 11.7-1.4-1.4 1.8-1.8 1.4 1.4ZM7 13.05h10v-2H7Zm0 0v-2 2Z"/>
    </Icon>
  );
});

IconMaterialFluorescent.displayName = 'AmauiIconMaterialFluorescent';

export default IconMaterialFluorescent;
