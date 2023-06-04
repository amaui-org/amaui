import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCamping = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Camping'

      short_name='Camping'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-4.65l8.75-11.8L9 3.2 10.6 2 12 3.875 13.4 2 15 3.2l-1.75 2.35L22 17.35V22ZM12 7.225 4 18v2h3l5-7 5 7h3v-2ZM9.45 20h5.1L12 16.45ZM12 13l5 7-5-7-5 7Z"/>
    </Icon>
  );
});

IconMaterialCamping.displayName = 'AmauiIconMaterialCamping';

export default IconMaterialCamping;
