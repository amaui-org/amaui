import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerSettingsNewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNewW100Filled'

      short_name='PowerSettingsNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13q-.15 0-.25-.1t-.1-.25v-8.2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.2q0 .15-.1.25T12 13Zm0 6.7q-1.6 0-3-.6t-2.45-1.65Q5.5 16.4 4.9 15q-.6-1.4-.6-3 0-1.625.663-3.088.662-1.462 1.887-2.587.125-.1.263-.088.137.013.237.113.1.1.088.237-.013.138-.138.238Q6.175 7.85 5.588 9.187 5 10.525 5 12q0 2.925 2.038 4.962Q9.075 19 12 19t4.962-2.038Q19 14.925 19 12q0-1.475-.587-2.813-.588-1.337-1.713-2.362-.125-.1-.138-.25-.012-.15.088-.25.1-.1.238-.1.137 0 .262.1 1.225 1.125 1.888 2.587.662 1.463.662 3.088 0 1.6-.6 3t-1.65 2.45Q16.4 18.5 15 19.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNewW100Filled.displayName = 'AmauiIconMaterialPowerSettingsNewW100Filled';

export default IconMaterialPowerSettingsNewW100Filled;
