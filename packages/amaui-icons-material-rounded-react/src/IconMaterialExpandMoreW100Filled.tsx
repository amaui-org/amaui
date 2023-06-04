import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreW100Filled'

      short_name='ExpandMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.2q-.125 0-.262-.05-.138-.05-.263-.175L7.15 9.65q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125L12 13.5l4.35-4.35q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-4.325 4.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialExpandMoreW100Filled.displayName = 'AmauiIconMaterialExpandMoreW100Filled';

export default IconMaterialExpandMoreW100Filled;
