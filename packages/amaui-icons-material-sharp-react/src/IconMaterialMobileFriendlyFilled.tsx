import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileFriendlyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyFilled'

      short_name='MobileFriendly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.95 16-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4ZM4 23V1h14v6h-2V6H6v12h10v-1h2v6Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlyFilled.displayName = 'AmauiIconMaterialMobileFriendlyFilled';

export default IconMaterialMobileFriendlyFilled;
