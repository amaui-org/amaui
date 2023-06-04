import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMms = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mms'

      short_name='Mms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14h12l-3.75-5-3 4L9 10Zm-4 8V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialMms.displayName = 'AmauiIconMaterialMms';

export default IconMaterialMms;
