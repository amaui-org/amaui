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
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v176h-65v247L568-416q9-14 14.5-30.27T588-480q0-44.55-31.72-76.28Q524.55-588 480-588t-76.27 31.72Q372-524.55 372-480t31.73 76.27Q435.45-372 480-372q19 0 36.5-6t31.5-18l122 122q-34 50-83.5 86T480-134Zm0-266q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm321.96 268q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4ZM788-260v-188h28v188h-28Z"/>
    </Icon>
  );
});

IconMaterialPolicyAlertW100Filled.displayName = 'AmauiIconMaterialPolicyAlertW100Filled';

export default IconMaterialPolicyAlertW100Filled;
