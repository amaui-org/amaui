import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepsW100Filled'

      short_name='Steps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M727 924 286 502H120l203-270 65 31v167l164-40 77 232 199 199-30 103h-71Zm-202 0L91 530h184l411 394H525Z"/>
    </Icon>
  );
});

IconMaterialStepsW100Filled.displayName = 'AmauiIconMaterialStepsW100Filled';

export default IconMaterialStepsW100Filled;
