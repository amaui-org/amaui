import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowWarmUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowWarmUpW100Filled'

      short_name='ArrowWarmUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.96-492q-5.96 0-9.96-4.02-4-4.03-4-9.98v-271L262-573q-4 4-9 3.5t-9.17-4.5q-3.83-3.67-3.83-9.33 0-5.67 4-9.67l215-215q5-5 10.13-7 5.14-2 11-2 5.87 0 10.87 2 5 2 10 7l216 216q4 3.75 4 9.37 0 5.63-4 9.63-4 5-10 4.5t-10-4.5L494-776v270q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm0 200q-5.96 0-9.96-4.02-4-4.03-4-9.98v-92q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v92q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm0 160q-5.96 0-9.96-4.02-4-4.03-4-9.98v-52q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v52q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialArrowWarmUpW100Filled.displayName = 'AmauiIconMaterialArrowWarmUpW100Filled';

export default IconMaterialArrowWarmUpW100Filled;
