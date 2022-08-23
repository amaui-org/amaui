import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpgradeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeRoundedFilled'
      short_name='Upgrade'

      {...props}
    >
      <path d="M12 16Q11.575 16 11.288 15.712Q11 15.425 11 15V7.825L9.1 9.7Q8.825 9.975 8.413 9.988Q8 10 7.7 9.7Q7.425 9.425 7.425 9Q7.425 8.575 7.7 8.3L11.3 4.7Q11.45 4.55 11.625 4.487Q11.8 4.425 12 4.425Q12.2 4.425 12.375 4.487Q12.55 4.55 12.7 4.7L16.3 8.3Q16.575 8.575 16.587 8.987Q16.6 9.4 16.3 9.7Q16.025 9.975 15.6 9.975Q15.175 9.975 14.9 9.7L13 7.825V15Q13 15.425 12.713 15.712Q12.425 16 12 16ZM8 20Q7.575 20 7.287 19.712Q7 19.425 7 19Q7 18.575 7.287 18.288Q7.575 18 8 18H16Q16.425 18 16.712 18.288Q17 18.575 17 19Q17 19.425 16.712 19.712Q16.425 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialUpgradeRoundedFilled.displayName = 'AmauiIconMaterialUpgradeRoundedFilled';

export default IconMaterialUpgradeRoundedFilled;
