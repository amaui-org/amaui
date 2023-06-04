import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAPhotoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoW100Filled'

      short_name='AddAPhoto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.975 20.7V7.3h4.4l1.85-2h4.9l1.2 1.2V8H16.7v2.35h2.675V20.7Zm8.7-3.2q1.475 0 2.488-1.012 1.012-1.013 1.012-2.488t-1.012-2.488Q12.15 10.5 10.675 10.5t-2.487 1.012Q7.175 12.525 7.175 14t1.013 2.488Q9.2 17.5 10.675 17.5ZM18.7 8V6h-2v-.7h2v-2h.7v2h2V6h-2v2Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoW100Filled.displayName = 'AmauiIconMaterialAddAPhotoW100Filled';

export default IconMaterialAddAPhotoW100Filled;
