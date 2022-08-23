import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessHighRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessHighRoundedFilled'
      short_name='BrightnessHigh'

      {...props}
    >
      <path d="M8.65 20H6Q5.175 20 4.588 19.413Q4 18.825 4 18V15.35L2.075 13.4Q1.5 12.825 1.5 12Q1.5 11.175 2.075 10.6L4 8.65V6Q4 5.175 4.588 4.588Q5.175 4 6 4H8.65L10.6 2.075Q11.175 1.5 12 1.5Q12.825 1.5 13.4 2.075L15.35 4H18Q18.825 4 19.413 4.588Q20 5.175 20 6V8.65L21.925 10.6Q22.5 11.175 22.5 12Q22.5 12.825 21.925 13.4L20 15.35V18Q20 18.825 19.413 19.413Q18.825 20 18 20H15.35L13.4 21.925Q12.825 22.5 12 22.5Q11.175 22.5 10.6 21.925ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialBrightnessHighRoundedFilled.displayName = 'AmauiIconMaterialBrightnessHighRoundedFilled';

export default IconMaterialBrightnessHighRoundedFilled;
