import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed2xW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed2xW100Filled'

      short_name='Speed2x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-306H306q-25 0-42.5-17.5T246-366v-68q0-26 17-43t43-17h68q14 0 23-9t9-23v-68q0-14-9-23t-23-9H260q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v68q0 26-17 43t-43 17h-68q-14 0-23 9t-9 23v68q0 14 9 23t23 9h114q6 0 10 4t4 10q0 6-4 10t-10 4Zm200-157-90 150q-2 3-5 5t-7 2q-8 0-12-7t0-14l98-163-85-142q-5-8 0-15t13-7q4 0 7 2t5 5l77 129 77-129q2-3 5-5t7-2q8 0 12 7t0 14l-85 141 98 164q5 8 0 15t-13 7q-4 0-7-2t-5-5l-90-150Z"/>
    </Icon>
  );
});

IconMaterialSpeed2xW100Filled.displayName = 'AmauiIconMaterialSpeed2xW100Filled';

export default IconMaterialSpeed2xW100Filled;
