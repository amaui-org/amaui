import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAlt'

      short_name='DirectionsAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.8 1.2 12 12 1.2 22.8 12Zm0-2.8 8-8-8-8-8 8Zm0-3 5-5-5-5-1.4 1.4 2.55 2.6H7v2h6.15l-2.55 2.6Zm0-5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAlt.displayName = 'AmauiIconMaterialDirectionsAlt';

export default IconMaterialDirectionsAlt;
