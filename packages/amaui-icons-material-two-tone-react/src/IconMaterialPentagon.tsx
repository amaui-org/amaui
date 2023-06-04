import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPentagon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pentagon'

      short_name='Pentagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon opacity=".3" points="19.63,9.78 16.56,19 7.44,19 4.37,9.78 12,4.44"/><path d="M19.63,9.78L16.56,19H7.44L4.37,9.78L12,4.44L19.63,9.78z M2,9l4,12h12l4-12L12,2L2,9z"/></g>
    </Icon>
  );
});

IconMaterialPentagon.displayName = 'AmauiIconMaterialPentagon';

export default IconMaterialPentagon;
