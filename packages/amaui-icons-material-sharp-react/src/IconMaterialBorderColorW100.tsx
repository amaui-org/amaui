import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderColorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorW100'

      short_name='BorderColor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 24v-1.4h20V24Zm3.3-4.7v-1.95l8.75-8.7 1.9 1.9-8.7 8.75Zm.7-.7h.9l8.05-8.05-.9-.9L6 17.7Zm10.775-9-1.9-1.85L16.5 6.125 18.375 8ZM6 18.6Z"/>
    </Icon>
  );
});

IconMaterialBorderColorW100.displayName = 'AmauiIconMaterialBorderColorW100';

export default IconMaterialBorderColorW100;
