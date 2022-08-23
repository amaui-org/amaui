import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoubleArrowRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowRoundedW100Filled'
      short_name='DoubleArrow'

      {...props}
    >
      <path d="M13.825 18.35Q13.625 18.35 13.512 18.175Q13.4 18 13.525 17.825L17.7 12L13.525 6.175Q13.4 6 13.512 5.825Q13.625 5.65 13.825 5.65Q13.95 5.65 14.013 5.687Q14.075 5.725 14.125 5.825L18.225 11.575Q18.3 11.675 18.325 11.775Q18.35 11.875 18.35 12Q18.35 12.125 18.325 12.225Q18.3 12.325 18.225 12.425L14.125 18.175Q14.075 18.275 14.013 18.312Q13.95 18.35 13.825 18.35ZM8.075 18.35Q7.875 18.35 7.763 18.175Q7.65 18 7.775 17.825L11.95 12L7.775 6.175Q7.65 6 7.763 5.825Q7.875 5.65 8.075 5.65Q8.2 5.65 8.25 5.687Q8.3 5.725 8.375 5.825L12.475 11.575Q12.55 11.675 12.575 11.775Q12.6 11.875 12.6 12Q12.6 12.125 12.575 12.225Q12.55 12.325 12.475 12.425L8.375 18.175Q8.325 18.275 8.263 18.312Q8.2 18.35 8.075 18.35Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowRoundedW100Filled.displayName = 'AmauiIconMaterialDoubleArrowRoundedW100Filled';

export default IconMaterialDoubleArrowRoundedW100Filled;
