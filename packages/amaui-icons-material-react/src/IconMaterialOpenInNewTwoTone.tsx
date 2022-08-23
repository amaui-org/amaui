import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewTwoTone'
      short_name='OpenInNew'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
    </Icon>
  );
});

IconMaterialOpenInNewTwoTone.displayName = 'AmauiIconMaterialOpenInNewTwoTone';

export default IconMaterialOpenInNewTwoTone;
