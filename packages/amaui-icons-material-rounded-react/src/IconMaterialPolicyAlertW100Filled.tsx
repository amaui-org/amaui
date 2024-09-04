import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicyAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyAlertW100Filled'

      short_name='PolicyAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-515.84V-682q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v134h-5q-24.75 0-42.37 17.62Q683-512.75 683-488v187L568-416q9-14 14.5-30.27T588-480q0-44.55-31.72-76.28Q524.55-588 480-588t-76.27 31.72Q372-524.55 372-480t31.73 76.27Q435.45-372 480-372q19 0 36.5-6t31.5-18l122 122q-29 43-71 76t-90 53q-7 3-14 4.5t-15 1.5q-8 0-15.46-1.5-7.47-1.5-14.54-4.5-103-44-170.5-145T212-515.84ZM480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm321.96 268q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4ZM788-274v-160q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v160q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialPolicyAlertW100Filled.displayName = 'AmauiIconMaterialPolicyAlertW100Filled';

export default IconMaterialPolicyAlertW100Filled;
