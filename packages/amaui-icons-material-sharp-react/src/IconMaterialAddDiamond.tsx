import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddDiamond'

      short_name='AddDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-320h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm41 274L49-480l432-433 430 433L481-46Zm-1-114 319-320-319-320-319 320 319 320Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialAddDiamond.displayName = 'AmauiIconMaterialAddDiamond';

export default IconMaterialAddDiamond;
