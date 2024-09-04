import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextdirectionVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionVerticalW100'

      short_name='FormatTextdirectionVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-276v-135q-62 0-105-43t-43-105q0-62 43-105t105-43h246v28h-80v403h-28v-403H308v403h-28Zm417 64L566-336l20-20 97 91v-442h28v442l97-91 20 20-131 124ZM280-439v-240q-50 0-85 35.25T160-559q0 49.5 35.25 84.75T280-439Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionVerticalW100.displayName = 'AmauiIconMaterialFormatTextdirectionVerticalW100';

export default IconMaterialFormatTextdirectionVerticalW100;
