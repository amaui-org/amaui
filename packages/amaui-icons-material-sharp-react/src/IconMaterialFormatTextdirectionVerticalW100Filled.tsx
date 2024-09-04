import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextdirectionVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionVerticalW100Filled'

      short_name='FormatTextdirectionVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-276v-135q-62 0-105-43t-43-105q0-62 43-105t105-43h246v28h-80v403h-28v-403H308v403h-28Zm417 64L566-336l20-20 97 91v-442h28v442l97-91 20 20-131 124Z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionVerticalW100Filled.displayName = 'AmauiIconMaterialFormatTextdirectionVerticalW100Filled';

export default IconMaterialFormatTextdirectionVerticalW100Filled;
