import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderColorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorW100Filled'

      short_name='BorderColor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 24v-1.4h20V24Zm3.3-4.7v-1.95l8.75-8.7 1.9 1.9-8.7 8.75Zm11.475-9.7-1.9-1.85L16.5 6.125 18.375 8Z"/>
    </Icon>
  );
});

IconMaterialBorderColorW100Filled.displayName = 'AmauiIconMaterialBorderColorW100Filled';

export default IconMaterialBorderColorW100Filled;
