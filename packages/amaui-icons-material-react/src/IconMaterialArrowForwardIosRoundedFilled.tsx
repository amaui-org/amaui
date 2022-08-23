import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardIosRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosRoundedFilled'
      short_name='ArrowForwardIos'

      {...props}
    >
      <path d="M7.15 21.1Q6.775 20.725 6.775 20.212Q6.775 19.7 7.15 19.325L14.475 12L7.125 4.65Q6.775 4.3 6.775 3.775Q6.775 3.25 7.15 2.875Q7.525 2.5 8.038 2.5Q8.55 2.5 8.925 2.875L17.325 11.3Q17.475 11.45 17.538 11.625Q17.6 11.8 17.6 12Q17.6 12.2 17.538 12.375Q17.475 12.55 17.325 12.7L8.9 21.125Q8.55 21.475 8.038 21.475Q7.525 21.475 7.15 21.1Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosRoundedFilled.displayName = 'AmauiIconMaterialArrowForwardIosRoundedFilled';

export default IconMaterialArrowForwardIosRoundedFilled;
