import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipPreviousRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousRoundedFilled'
      short_name='SkipPrevious'

      {...props}
    >
      <path d="M6.5 18Q6.075 18 5.787 17.712Q5.5 17.425 5.5 17V7Q5.5 6.575 5.787 6.287Q6.075 6 6.5 6Q6.925 6 7.213 6.287Q7.5 6.575 7.5 7V17Q7.5 17.425 7.213 17.712Q6.925 18 6.5 18ZM16.95 16.975 10.75 12.825Q10.3 12.525 10.3 12Q10.3 11.475 10.75 11.175L16.95 7.025Q17.45 6.7 17.975 6.987Q18.5 7.275 18.5 7.875V16.125Q18.5 16.725 17.975 17.025Q17.45 17.325 16.95 16.975Z"/>
    </Icon>
  );
});

IconMaterialSkipPreviousRoundedFilled.displayName = 'AmauiIconMaterialSkipPreviousRoundedFilled';

export default IconMaterialSkipPreviousRoundedFilled;
