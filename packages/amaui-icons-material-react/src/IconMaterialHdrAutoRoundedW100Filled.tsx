import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrAutoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoRoundedW100Filled'
      short_name='HdrAuto'

      {...props}
    >
      <path d="M8.375 16.55Q8.475 16.55 8.55 16.5Q8.625 16.45 8.675 16.35L9.65 13.7H14.35L15.325 16.35Q15.375 16.45 15.45 16.5Q15.525 16.55 15.625 16.55Q15.825 16.55 15.938 16.4Q16.05 16.25 15.975 16.05L12.525 6.775Q12.475 6.65 12.338 6.55Q12.2 6.45 12.05 6.45Q11.9 6.45 11.762 6.55Q11.625 6.65 11.575 6.775L8.025 16.075Q7.95 16.275 8.062 16.413Q8.175 16.55 8.375 16.55ZM9.9 13.05 12 7.55H12.1L14.1 13.05ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoRoundedW100Filled.displayName = 'AmauiIconMaterialHdrAutoRoundedW100Filled';

export default IconMaterialHdrAutoRoundedW100Filled;
