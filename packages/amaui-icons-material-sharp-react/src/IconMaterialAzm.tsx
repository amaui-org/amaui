import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAzm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Azm'

      short_name='Azm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 1016V656H40l400-400h360v360l-400 400Zm240-353 80-80V336H473l-80 80h247v247ZM480 823l80-80V496H313l-80 80h247v247Z"/>
    </Icon>
  );
});

IconMaterialAzm.displayName = 'AmauiIconMaterialAzm';

export default IconMaterialAzm;
