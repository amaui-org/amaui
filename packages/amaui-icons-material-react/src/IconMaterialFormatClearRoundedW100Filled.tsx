import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatClearRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearRoundedW100Filled'
      short_name='FormatClear'

      {...props}
    >
      <path d="M12.35 9.85 11.825 9.325 12.85 6.85H9.3L8.6 6.15H18.5Q18.65 6.15 18.75 6.25Q18.85 6.35 18.85 6.5Q18.85 6.65 18.75 6.75Q18.65 6.85 18.5 6.85H13.625ZM18.95 19.95 11.325 12.3 9.025 17.725Q8.975 17.825 8.9 17.887Q8.825 17.95 8.7 17.95Q8.5 17.95 8.4 17.788Q8.3 17.625 8.375 17.45L10.8 11.775L3.8 4.8Q3.7 4.7 3.688 4.562Q3.675 4.425 3.8 4.3Q3.925 4.175 4.05 4.175Q4.175 4.175 4.3 4.3L19.45 19.45Q19.55 19.55 19.562 19.688Q19.575 19.825 19.45 19.95Q19.325 20.075 19.2 20.075Q19.075 20.075 18.95 19.95Z"/>
    </Icon>
  );
});

IconMaterialFormatClearRoundedW100Filled.displayName = 'AmauiIconMaterialFormatClearRoundedW100Filled';

export default IconMaterialFormatClearRoundedW100Filled;
