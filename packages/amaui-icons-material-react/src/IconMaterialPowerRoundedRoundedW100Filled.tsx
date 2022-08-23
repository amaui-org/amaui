import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerRoundedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerRoundedRoundedW100Filled'
      short_name='PowerRounded'

      {...props}
    >
      <path d="M12 12.85q-.15 0-.25-.1t-.1-.25V4.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.2q0 .15-.1.25t-.25.1Zm0 6.7q-1.6 0-3-.6T6.55 17.3Q5.5 16.25 4.9 14.85q-.6-1.4-.6-3 0-1.625.663-3.088Q5.625 7.3 6.85 6.175q.125-.1.263-.088.137.013.237.113.1.1.088.238-.013.137-.138.237Q6.175 7.7 5.588 9.037 5 10.375 5 11.85q0 2.925 2.038 4.962Q9.075 18.85 12 18.85t4.962-2.038Q19 14.775 19 11.85q0-1.475-.587-2.813Q17.825 7.7 16.7 6.675q-.125-.1-.138-.25-.012-.15.088-.25.1-.1.238-.1.137 0 .262.1 1.225 1.125 1.888 2.587.662 1.463.662 3.088 0 1.6-.6 3t-1.65 2.45Q16.4 18.35 15 18.95q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialPowerRoundedRoundedW100Filled.displayName = 'AmauiIconMaterialPowerRoundedRoundedW100Filled';

export default IconMaterialPowerRoundedRoundedW100Filled;
