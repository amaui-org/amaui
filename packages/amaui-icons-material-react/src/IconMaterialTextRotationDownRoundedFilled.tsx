import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotationDownRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDownRoundedFilled'
      short_name='TextRotationDown'

      {...props}
    >
      <path d="M5.975 20.625Q5.775 20.625 5.575 20.55Q5.375 20.475 5.225 20.325L3.225 18.325Q2.925 18.025 2.925 17.612Q2.925 17.2 3.225 16.9Q3.525 16.6 3.938 16.6Q4.35 16.6 4.65 16.9L5 17.225V5.025Q5 4.6 5.287 4.312Q5.575 4.025 6 4.025Q6.425 4.025 6.713 4.312Q7 4.6 7 5.025V17.225L7.35 16.875Q7.625 16.6 8.05 16.6Q8.475 16.6 8.75 16.875Q9.025 17.15 9.025 17.575Q9.025 18 8.75 18.275L6.7 20.325Q6.55 20.475 6.363 20.55Q6.175 20.625 5.975 20.625ZM11.2 16.65Q10.7 16.85 10.35 16.6Q10 16.35 10 15.8Q10 15.55 10.163 15.325Q10.325 15.1 10.55 15.025L12.8 14.25V9.8L10.55 9Q10.325 8.925 10.163 8.7Q10 8.475 10 8.2Q10 7.65 10.35 7.4Q10.7 7.15 11.2 7.35L20.075 10.675Q20.45 10.825 20.725 11.212Q21 11.6 21 12.025Q21 12.45 20.725 12.825Q20.45 13.2 20.075 13.35ZM14.4 13.675 18.95 12.075V11.975L14.4 10.375Z"/>
    </Icon>
  );
});

IconMaterialTextRotationDownRoundedFilled.displayName = 'AmauiIconMaterialTextRotationDownRoundedFilled';

export default IconMaterialTextRotationDownRoundedFilled;
