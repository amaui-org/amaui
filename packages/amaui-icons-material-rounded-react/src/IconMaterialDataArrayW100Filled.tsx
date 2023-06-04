import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataArrayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayW100Filled'

      short_name='DataArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 18.15V5.85H15.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.15q.275 0 .488.212.212.213.212.488v12.3q0 .275-.212.488-.213.212-.488.212H15.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1Zm-12.3 0H7.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.35q-.275 0-.487-.212-.213-.213-.213-.488V5.85q0-.275.213-.488.212-.212.487-.212H7.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.35Z"/>
    </Icon>
  );
});

IconMaterialDataArrayW100Filled.displayName = 'AmauiIconMaterialDataArrayW100Filled';

export default IconMaterialDataArrayW100Filled;
