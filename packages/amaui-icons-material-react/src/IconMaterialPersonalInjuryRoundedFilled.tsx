import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonalInjuryRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalInjuryRoundedFilled'
      short_name='PersonalInjury'

      {...props}
    >
      <path d="M12 10Q10.35 10 9.175 8.825Q8 7.65 8 6Q8 4.35 9.175 3.175Q10.35 2 12 2Q13.65 2 14.825 3.175Q16 4.35 16 6Q16 7.65 14.825 8.825Q13.65 10 12 10ZM9.75 20Q9.45 20 9.225 19.775Q9 19.55 9 19.25Q9 18.95 9.225 18.725Q9.45 18.5 9.75 18.5H11.65L10.95 20ZM4 22V15.225Q4 14.375 4.425 13.662Q4.85 12.95 5.6 12.55Q6.875 11.9 8.488 11.45Q10.1 11 12 11Q12.8 11 13.6 11.1Q14.4 11.2 15 11.325L12.575 16.5H9.75Q8.6 16.5 7.8 17.3Q7 18.1 7 19.25Q7 20.4 7.8 21.2Q8.6 22 9.75 22ZM16.95 22V11.925Q17.325 12.05 17.712 12.225Q18.1 12.4 18.4 12.55Q19.15 12.95 19.575 13.662Q20 14.375 20 15.225V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialPersonalInjuryRoundedFilled.displayName = 'AmauiIconMaterialPersonalInjuryRoundedFilled';

export default IconMaterialPersonalInjuryRoundedFilled;
