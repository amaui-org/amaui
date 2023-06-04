import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOff'

      short_name='EditOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 22.6-7.075-7.075L7.25 21H3v-4.25l5.475-5.475L1.4 4.2l1.425-1.425 18.4 18.4ZM5 19h1.4l4.9-4.9-.7-.7-.7-.7L5 17.6Zm6.3-4.9-.7-.7-.7-.7 1.4 1.4Zm4.275-1.425L14.15 11.25l.875-.875-1.4-1.4-.875.875-1.425-1.425L13.6 6.15l4.25 4.25Zm3.725-3.75-4.25-4.2L17.875 1.9 22.1 6.125Zm-5.85 1.625Z"/>
    </Icon>
  );
});

IconMaterialEditOff.displayName = 'AmauiIconMaterialEditOff';

export default IconMaterialEditOff;
