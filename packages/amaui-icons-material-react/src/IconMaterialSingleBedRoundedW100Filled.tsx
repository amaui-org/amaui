import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSingleBedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedRoundedW100Filled'
      short_name='SingleBed'

      {...props}
    >
      <path d="M5.3 15.7V12.8Q5.3 12.175 5.738 11.737Q6.175 11.3 6.8 11.3H7.3V9.1Q7.3 8.475 7.738 8.037Q8.175 7.6 8.8 7.6H15.2Q15.825 7.6 16.262 8.037Q16.7 8.475 16.7 9.1V11.3H17.2Q17.825 11.3 18.262 11.737Q18.7 12.175 18.7 12.8V15.7H18L17.725 17.525Q17.7 17.6 17.637 17.65Q17.575 17.7 17.5 17.7Q17.425 17.7 17.363 17.65Q17.3 17.6 17.275 17.525L17 15.7H7L6.725 17.525Q6.7 17.6 6.638 17.65Q6.575 17.7 6.5 17.7Q6.425 17.7 6.363 17.65Q6.3 17.6 6.275 17.525L6 15.7ZM12.35 11.3H16V9.1Q16 8.75 15.775 8.525Q15.55 8.3 15.2 8.3H12.35ZM8 11.3H11.65V8.3H8.8Q8.45 8.3 8.225 8.525Q8 8.75 8 9.1Z"/>
    </Icon>
  );
});

IconMaterialSingleBedRoundedW100Filled.displayName = 'AmauiIconMaterialSingleBedRoundedW100Filled';

export default IconMaterialSingleBedRoundedW100Filled;
