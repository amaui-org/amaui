import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardTabRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRtlW100'

      short_name='KeyboardTabRtl'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m329 590 160 160q4 4 4.5 10t-4.5 10q-4 4-10 3.5t-10-4.5L297 597q-9-9-9-21t9-21l173-173q4-4 9.5-3.5t9.674 4.674Q493 387 493 392t-4 9L330 562h510q5.95 0 9.975 4.035 4.025 4.035 4.025 10T849.975 586q-4.025 4-9.975 4H329ZM119.965 790Q114 790 110 785.975T106 776V376q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v400q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRtlW100.displayName = 'AmauiIconMaterialKeyboardTabRtlW100';

export default IconMaterialKeyboardTabRtlW100;
