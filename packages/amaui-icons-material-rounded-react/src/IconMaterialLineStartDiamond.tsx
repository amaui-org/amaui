import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamond'

      short_name='LineStartDiamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16.175 13.175 12 9 7.825 4.825 12ZM9 19l-7-7 7-7 6 6h7v2h-7Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamond.displayName = 'AmauiIconMaterialLineStartDiamond';

export default IconMaterialLineStartDiamond;
