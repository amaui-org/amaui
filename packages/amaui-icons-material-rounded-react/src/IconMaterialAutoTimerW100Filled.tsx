import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoTimerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTimerW100Filled'

      short_name='AutoTimer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M437.667-397.667 473-319q2.4 5 7.2 5 4.8 0 6.8-5l35.333-78.667L601-433q5-2.4 5-7.2 0-4.8-5-6.8l-78.667-35.333L487-561q-2.4-5-7.2-5-4.8 0-6.8 5l-35.333 78.667L359-447q-5 2.4-5 7.2 0 4.8 5 6.8l78.667 35.333ZM394-866q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h172q5.95 0 9.975 4.035 4.025 4.035 4.025 10T575.975-870q-4.025 4-9.975 4H394Zm86 734q-63.532 0-119.766-24Q304-180 262-222q-42-42-66-98.234Q172-376.468 172-440q0-63.532 24-119.766Q220-616 262-658q42-42 98.234-66Q416.468-748 480-748q57 0 110.5 21t97.5 59l30-30q4-4 9.5-4.5T738-698q5 5 5 10t-5 10l-30 30q38 44 59 97.5T788-440q0 63.532-24 119.766Q740-264 698-222q-42 42-98.234 66Q543.532-132 480-132Z"/>
    </Icon>
  );
});

IconMaterialAutoTimerW100Filled.displayName = 'AmauiIconMaterialAutoTimerW100Filled';

export default IconMaterialAutoTimerW100Filled;
