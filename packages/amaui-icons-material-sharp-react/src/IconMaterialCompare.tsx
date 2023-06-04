import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Compare'

      short_name='Compare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 23v-2H3V3h7V1h2v22Zm-5-5h5v-6Zm9 3v-9l5 6V5h-5V3h7v18Z"/>
    </Icon>
  );
});

IconMaterialCompare.displayName = 'AmauiIconMaterialCompare';

export default IconMaterialCompare;
