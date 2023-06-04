import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfloatLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatLandscapeFilled'

      short_name='UnfloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v280H600v360H80Zm160-480v240h80V553l123 123 57-57-124-123h104v-80H240Zm440 480V616h200v280H680Z"/>
    </Icon>
  );
});

IconMaterialUnfloatLandscapeFilled.displayName = 'AmauiIconMaterialUnfloatLandscapeFilled';

export default IconMaterialUnfloatLandscapeFilled;
