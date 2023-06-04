import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFull'

      short_name='OpenInFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71"/>
    </Icon>
  );
});

IconMaterialOpenInFull.displayName = 'AmauiIconMaterialOpenInFull';

export default IconMaterialOpenInFull;
