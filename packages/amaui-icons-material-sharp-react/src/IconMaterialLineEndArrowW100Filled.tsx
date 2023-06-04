import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndArrowW100Filled'

      short_name='LineEndArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.55 16.175V12.35H3.4v-.7h9.15V7.825L19.125 12Z"/>
    </Icon>
  );
});

IconMaterialLineEndArrowW100Filled.displayName = 'AmauiIconMaterialLineEndArrowW100Filled';

export default IconMaterialLineEndArrowW100Filled;
