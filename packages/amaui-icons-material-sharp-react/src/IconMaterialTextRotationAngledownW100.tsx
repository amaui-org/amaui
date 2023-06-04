import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationAngledownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngledownW100'

      short_name='TextRotationAngledown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.75 20.35v-.7h2.4L3.2 9.7l.5-.5 9.95 9.95v-2.4h.7v3.6Zm3.975-5.95-.55-.525 1.275-2.75L12.125 7.8l-2.75 1.275-.525-.55 9.85-4.4.5.475Zm-1.95-6.9 2.975 2.975 2.475-5.3-.075-.075Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngledownW100.displayName = 'AmauiIconMaterialTextRotationAngledownW100';

export default IconMaterialTextRotationAngledownW100;
