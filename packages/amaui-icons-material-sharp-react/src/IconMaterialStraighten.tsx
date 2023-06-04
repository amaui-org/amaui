import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraighten = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Straighten'

      short_name='Straighten'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18V6h20v12Zm2-2h16V8h-3v4h-2V8h-2v4h-2V8H9v4H7V8H4Zm3-4h2Zm4 0h2Zm4 0h2Zm-3 0Z"/>
    </Icon>
  );
});

IconMaterialStraighten.displayName = 'AmauiIconMaterialStraighten';

export default IconMaterialStraighten;
