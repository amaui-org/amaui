import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPharmacy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacy'

      short_name='LocalPharmacy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2l2-6-2-6V5h12.7l1.45-4 2.35.85L18.35 5H21v2l-2 6 2 6v2Zm8-4h2v-3h3v-2h-3V9h-2v3H8v2h3Zm-5.9 2h13.8l-2-6 2-6H5.1l2 6Zm6.9-6Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacy.displayName = 'AmauiIconMaterialLocalPharmacy';

export default IconMaterialLocalPharmacy;
