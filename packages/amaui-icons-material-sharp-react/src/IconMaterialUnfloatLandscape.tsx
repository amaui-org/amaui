import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfloatLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfloatLandscape'

      short_name='UnfloatLandscape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v280h-80V336H160v480h440v80H80Zm363-220 57-57-124-123h104v-80H240v240h80V553l123 123Zm237 220V616h200v280H680ZM480 576Z"/>
    </Icon>
  );
});

IconMaterialUnfloatLandscape.displayName = 'AmauiIconMaterialUnfloatLandscape';

export default IconMaterialUnfloatLandscape;
