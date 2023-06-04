import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter7Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter7Filled'

      short_name='Counter7'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m520 456-68 272q-5 18 7 33t31 15q14 0 24-8t13-21l71-281q2-5 2-9v-9q0-29-20.5-50.5T530 376H400q-17 0-28.5 11.5T360 416q0 17 11.5 28.5T400 456h120Zm-40 520q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialCounter7Filled.displayName = 'AmauiIconMaterialCounter7Filled';

export default IconMaterialCounter7Filled;
