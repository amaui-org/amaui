import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthRoundedFilled'
      short_name='South'

      {...props}
    >
      <path d="M12 21.575Q11.8 21.575 11.625 21.512Q11.45 21.45 11.3 21.3L5.7 15.7Q5.425 15.425 5.425 15.012Q5.425 14.6 5.7 14.3Q6 14 6.412 14Q6.825 14 7.125 14.3L11 18.175V3Q11 2.575 11.288 2.287Q11.575 2 12 2Q12.425 2 12.713 2.287Q13 2.575 13 3V18.175L16.9 14.3Q17.175 14.025 17.587 14.012Q18 14 18.3 14.3Q18.575 14.575 18.575 15Q18.575 15.425 18.3 15.7L12.7 21.3Q12.55 21.45 12.375 21.512Q12.2 21.575 12 21.575Z"/>
    </Icon>
  );
});

IconMaterialSouthRoundedFilled.displayName = 'AmauiIconMaterialSouthRoundedFilled';

export default IconMaterialSouthRoundedFilled;
