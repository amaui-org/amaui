import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEuroSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSharpFilled'
      short_name='Euro'

      {...props}
    >
      <path d="M15 21Q12.05 21 9.75 19.325Q7.45 17.65 6.5 15H3V13H6.05Q5.975 12.4 5.988 11.887Q6 11.375 6.05 11H3V9H6.5Q7.45 6.35 9.75 4.675Q12.05 3 15 3Q16.725 3 18.263 3.612Q19.8 4.225 21 5.3L19.575 6.7Q18.65 5.9 17.488 5.45Q16.325 5 15 5Q12.875 5 11.2 6.112Q9.525 7.225 8.675 9H15V11H8.075Q7.975 11.675 8 12.188Q8.025 12.7 8.075 13H15V15H8.675Q9.525 16.775 11.2 17.887Q12.875 19 15 19Q16.325 19 17.488 18.55Q18.65 18.1 19.575 17.3L21 18.7Q19.8 19.775 18.263 20.387Q16.725 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialEuroSharpFilled.displayName = 'AmauiIconMaterialEuroSharpFilled';

export default IconMaterialEuroSharpFilled;
