import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationAngledownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngledownFilled'

      short_name='TextRotationAngledown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21v-2h1.6L2.3 9.7l1.4-1.4 9.3 9.3V16h2v5Zm5.1-5.55-1.35-1.35 1.3-2.65L11.9 8.3 9.25 9.55 7.9 8.2l10.7-4.85 1.4 1.4Zm-1.65-7.9 2.3 2.35 2.1-4.35-.05-.05Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngledownFilled.displayName = 'AmauiIconMaterialTextRotationAngledownFilled';

export default IconMaterialTextRotationAngledownFilled;
