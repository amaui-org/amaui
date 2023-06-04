import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayPrimaryLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscapeW100'

      short_name='StayPrimaryLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 17.7V6.3h19.4v11.4Zm3.05-.7h13.3V7H5.35ZM3 17h1.65V7H3Zm16.35 0H21V7h-1.65ZM3 7h1.65Zm16.35 0H21Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscapeW100.displayName = 'AmauiIconMaterialStayPrimaryLandscapeW100';

export default IconMaterialStayPrimaryLandscapeW100;
