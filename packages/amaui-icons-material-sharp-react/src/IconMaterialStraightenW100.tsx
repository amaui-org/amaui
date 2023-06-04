import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraightenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenW100'

      short_name='Straighten'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 16.7V7.3h17.4v9.4ZM4 16h16V8h-3.65v3h-.7V8h-3.3v3h-.7V8h-3.3v3h-.7V8H4Zm3.65-5h.7Zm4 0h.7Zm4 0h.7ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialStraightenW100.displayName = 'AmauiIconMaterialStraightenW100';

export default IconMaterialStraightenW100;
