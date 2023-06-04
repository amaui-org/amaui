import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexDirection = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexDirection'

      short_name='FlexDirection'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V616h360v280H80Zm0-360V256h360v280H80Zm80-80h200V336H160v120Zm560 440L520 696l56-56 104 103V256h80v487l104-103 56 56-200 200Z"/>
    </Icon>
  );
});

IconMaterialFlexDirection.displayName = 'AmauiIconMaterialFlexDirection';

export default IconMaterialFlexDirection;
