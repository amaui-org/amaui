import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkilletCooktopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkilletCooktopFilled'

      short_name='SkilletCooktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-360v-280h520v-69l267-89 25 76-212 71v291H120Zm240 240v-120H80v-80h360v200h-80Zm160 0v-200h360v80H600v120h-80Z"/>
    </Icon>
  );
});

IconMaterialSkilletCooktopFilled.displayName = 'AmauiIconMaterialSkilletCooktopFilled';

export default IconMaterialSkilletCooktopFilled;
