import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicyAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyAlertW100'

      short_name='PolicyAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v176h-28v-157l-240-89-240 89v189q0 121 68 220t172 132q26-8 49.5-20.5T576-214l16 22q-29 20-54 33.5T480-134Zm321.96 2q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4ZM788-260v-188h28v188h-28ZM480-480Zm0 80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0 28q-44.55 0-76.27-31.73Q372-435.45 372-480t31.73-76.28Q435.45-588 480-588t76.28 31.72Q588-524.55 588-480q0 17.46-5.5 33.73Q577-430 568-416l114 114-20 20-114-114q-14 12-31.5 18t-36.5 6Z"/>
    </Icon>
  );
});

IconMaterialPolicyAlertW100.displayName = 'AmauiIconMaterialPolicyAlertW100';

export default IconMaterialPolicyAlertW100;
