import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAPhotoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoW100'

      short_name='AddAPhoto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.675 17.5q1.475 0 2.488-1.012 1.012-1.013 1.012-2.488t-1.012-2.488Q12.15 10.5 10.675 10.5t-2.487 1.012Q7.175 12.525 7.175 14t1.013 2.488Q9.2 17.5 10.675 17.5Zm-8.7 3.2V7.3h4.4l1.85-2h4.9l1.2 1.2V8H2.675v12h16v-9.65h.7V20.7ZM18.7 8V6h-2v-.7h2v-2h.7v2h2V6h-2v2ZM2.675 20V8v12Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoW100.displayName = 'AmauiIconMaterialAddAPhotoW100';

export default IconMaterialAddAPhotoW100;
