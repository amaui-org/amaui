import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExtensionOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffFilled'

      short_name='ExtensionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 18.15 21H14.2q0-1.25-.787-2.125Q12.625 18 11.5 18t-1.912.875Q8.8 19.75 8.8 21H3v-5.8q1.25 0 2.125-.788Q6 13.625 6 12.5t-.875-1.913Q4.25 9.8 3 9.8V5.85L1.375 4.225 2.8 2.8l18.4 18.4ZM20 17.15 6.85 4H9q0-1.05.725-1.775Q10.45 1.5 11.5 1.5q1.05 0 1.775.725Q14 2.95 14 4h6v6q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q21.05 15 20 15Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffFilled.displayName = 'AmauiIconMaterialExtensionOffFilled';

export default IconMaterialExtensionOffFilled;
