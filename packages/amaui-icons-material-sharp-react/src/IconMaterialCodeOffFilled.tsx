import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffFilled'

      short_name='CodeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 7 9.85l-2.175 2.175L9.4 16.6 8 18l-6-6 3.575-3.575-4.2-4.2L2.8 2.8l18.4 18.4Zm-1.35-7.05L17 14.15l2.175-2.175L14.6 7.4 16 6l6 6Z"/>
    </Icon>
  );
});

IconMaterialCodeOffFilled.displayName = 'AmauiIconMaterialCodeOffFilled';

export default IconMaterialCodeOffFilled;
