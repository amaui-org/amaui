import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltFilled'

      short_name='EditLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11V8.9l6.2-6.2 2.1 2.1-6.2 6.2Zm9-6.9L17.9 2 19.3.6l2.1 2.1ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2q.675 0 1.338.112.662.113 1.287.313L9 8.075V13h4.95l5.6-5.6q.225.65.338 1.35.112.7.112 1.45 0 2.5-1.987 5.437Q16.025 18.575 12 22Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltFilled.displayName = 'AmauiIconMaterialEditLocationAltFilled';

export default IconMaterialEditLocationAltFilled;
