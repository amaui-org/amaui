import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRightW100'

      short_name='AlignHorizontalRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 20.7V3.3h.7v17.4Zm-8.7-4.6v-1.75h5.95v1.75Zm-6-6.45V7.9h11.95v1.75Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalRightW100.displayName = 'AmauiIconMaterialAlignHorizontalRightW100';

export default IconMaterialAlignHorizontalRightW100;
