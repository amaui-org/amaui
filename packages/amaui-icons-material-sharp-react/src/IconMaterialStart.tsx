import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Start'

      short_name='Start'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18V6h2v12Zm14 0-1.425-1.4 3.6-3.6H6v-2h12.175L14.6 7.4 16 6l6 6Z"/>
    </Icon>
  );
});

IconMaterialStart.displayName = 'AmauiIconMaterialStart';

export default IconMaterialStart;
