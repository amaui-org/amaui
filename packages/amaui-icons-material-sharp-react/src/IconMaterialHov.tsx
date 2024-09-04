import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHov = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hov'

      short_name='Hov'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 240-480l240-400 240 400L480-80Zm0-156 147-244-147-244-147 244 147 244Zm0-244Z"/>
    </Icon>
  );
});

IconMaterialHov.displayName = 'AmauiIconMaterialHov';

export default IconMaterialHov;
