import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVitals = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vitals'

      short_name='Vitals'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 13v-2h5.7L9 17.1l6-15.825L18.7 11H23v2h-5.7L15 6.9 9 22.725 5.3 13Z"/>
    </Icon>
  );
});

IconMaterialVitals.displayName = 'AmauiIconMaterialVitals';

export default IconMaterialVitals;
