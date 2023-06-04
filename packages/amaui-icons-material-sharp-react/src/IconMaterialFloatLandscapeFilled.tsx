import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatLandscapeFilled'

      short_name='FloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v280H600v360H80Zm600 0V616h200v280H680Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscapeFilled.displayName = 'AmauiIconMaterialFloatLandscapeFilled';

export default IconMaterialFloatLandscapeFilled;
