import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftW100'

      short_name='AlignHorizontalLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V3.3H5v17.4Zm3.45-4.6v-1.75h5.95v1.75Zm0-6.45V7.9H19.7v1.75Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftW100.displayName = 'AmauiIconMaterialAlignHorizontalLeftW100';

export default IconMaterialAlignHorizontalLeftW100;
