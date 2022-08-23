import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCribSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribSharpFilled'
      short_name='Crib'

      {...props}
    >
      <path d="M12 20Q12.5 20 13 19.938Q13.5 19.875 14 19.75V16H10V19.75Q10.5 19.875 11 19.938Q11.5 20 12 20ZM12 22Q10 22 8.175 21.238Q6.35 20.475 4.925 19.075L6.35 17.65Q6.725 18.025 7.138 18.337Q7.55 18.65 8 18.925V16H4V8Q4 6.35 5.175 5.175Q6.35 4 8 4H12V9H20V16H16V18.925Q16.45 18.65 16.863 18.337Q17.275 18.025 17.65 17.65L19.075 19.075Q17.65 20.475 15.825 21.238Q14 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialCribSharpFilled.displayName = 'AmauiIconMaterialCribSharpFilled';

export default IconMaterialCribSharpFilled;
