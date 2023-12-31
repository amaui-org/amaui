import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInPhoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInPhoneFilled'

      short_name='OpenInPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-320h80v120h400v-480H280v120h-80v-320h560v880H200Zm200-280-56-56 62-64H80v-80h326l-62-64 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialOpenInPhoneFilled.displayName = 'AmauiIconMaterialOpenInPhoneFilled';

export default IconMaterialOpenInPhoneFilled;
