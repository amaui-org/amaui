import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddDiamondFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddDiamondFilled'

      short_name='AddDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-320h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm41 274L49-480l432-433 430 433L481-46Z"/>
    </Icon>
  );
});

IconMaterialAddDiamondFilled.displayName = 'AmauiIconMaterialAddDiamondFilled';

export default IconMaterialAddDiamondFilled;
