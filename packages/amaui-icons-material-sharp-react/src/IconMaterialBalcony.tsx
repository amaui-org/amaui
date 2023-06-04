import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBalcony = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Balcony'

      short_name='Balcony'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 12v-2h2v2Zm6 0v-2h2v2ZM3 22v-8h1v-4q0-1.65.625-3.112.625-1.463 1.713-2.55 1.087-1.088 2.55-1.713Q10.35 2 12 2q1.65 0 3.113.625 1.462.625 2.55 1.713 1.087 1.087 1.712 2.55Q20 8.35 20 10v4h1v8Zm2-2h2v-4H5Zm4 0h2v-4H9Zm-3-6h5V4.075q-2.15.35-3.575 2.012Q6 7.75 6 10Zm7 0h5v-4q0-2.25-1.425-3.913Q15.15 4.425 13 4.075Zm0 6h2v-4h-2Zm4 0h2v-4h-2Z"/>
    </Icon>
  );
});

IconMaterialBalcony.displayName = 'AmauiIconMaterialBalcony';

export default IconMaterialBalcony;
