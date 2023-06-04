import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEscalator = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Escalator'

      short_name='Escalator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Zm.5-1h4.8l5-9h3.2V6h-4.8l-5 9H5.5Z"/>
    </Icon>
  );
});

IconMaterialEscalator.displayName = 'AmauiIconMaterialEscalator';

export default IconMaterialEscalator;
