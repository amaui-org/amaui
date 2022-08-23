import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayDisabledRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledRoundedW100Filled'
      short_name='PlayDisabled'

      {...props}
    >
      <path d="M10.475 15.925Q10.1 16.175 9.713 15.95Q9.325 15.725 9.325 15.275V11.25L5.225 7.15Q5.1 7.025 5.1 6.9Q5.1 6.775 5.225 6.65Q5.35 6.525 5.475 6.525Q5.6 6.525 5.725 6.65L17.325 18.25Q17.45 18.375 17.45 18.5Q17.45 18.625 17.325 18.75Q17.2 18.875 17.075 18.875Q16.95 18.875 16.825 18.75L12.625 14.55ZM14.925 13.05 9.325 7.45V7.35L15.625 11.35Q15.975 11.575 15.963 11.987Q15.95 12.4 15.6 12.625Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledRoundedW100Filled.displayName = 'AmauiIconMaterialPlayDisabledRoundedW100Filled';

export default IconMaterialPlayDisabledRoundedW100Filled;
