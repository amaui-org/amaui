import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationSearchingTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearchingTwoTone'
      short_name='LocationSearching'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
    </Icon>
  );
});

IconMaterialLocationSearchingTwoTone.displayName = 'AmauiIconMaterialLocationSearchingTwoTone';

export default IconMaterialLocationSearchingTwoTone;
