import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCo2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2'

      short_name='Co2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 15V9h5v6Zm1.5-1.5h2v-3h-2ZM3 15V9h5v2H6.5v-.5h-2v3h2V13H8v2Zm14 3v-3.5h3v-1h-3V12h4.5v3.5h-3v1h3V18Z"/>
    </Icon>
  );
});

IconMaterialCo2.displayName = 'AmauiIconMaterialCo2';

export default IconMaterialCo2;
