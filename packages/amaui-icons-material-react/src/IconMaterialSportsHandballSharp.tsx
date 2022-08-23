import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsHandballSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHandballSharp'
      short_name='SportsHandball'

      {...props}
    >
      <path d="M16 9Q15.175 9 14.588 8.412Q14 7.825 14 7Q14 6.175 14.588 5.588Q15.175 5 16 5Q16.825 5 17.413 5.588Q18 6.175 18 7Q18 7.825 17.413 8.412Q16.825 9 16 9ZM9.2 23.9 7.45 22.9 10.45 17.7 8.75 16.7 7.25 19.3 5.5 18.3 10.65 9.4Q9.7 8.425 9.225 7.175Q8.75 5.925 8.75 4.6Q8.75 3.7 8.975 2.812Q9.2 1.925 9.7 1.1L11.4 2.1Q11.05 2.675 10.9 3.287Q10.75 3.9 10.75 4.55Q10.75 5.875 11.4 7.037Q12.05 8.2 13.25 8.9L15.5 10.2Q17.05 11.1 17.775 12.787Q18.5 14.475 18.5 15.95Q18.5 16.9 18.25 17.8Q18 18.7 17.55 19.5L15.8 18.5Q16.15 17.9 16.3 17.275Q16.45 16.65 16.45 16Q16.45 15.2 16.225 14.45Q16 13.7 15.5 13.05ZM13.5 4Q12.85 4 12.425 3.55Q12 3.1 12 2.5Q12 1.85 12.45 1.425Q12.9 1 13.5 1Q14.15 1 14.575 1.45Q15 1.9 15 2.5Q15 3.15 14.55 3.575Q14.1 4 13.5 4Z"/>
    </Icon>
  );
});

IconMaterialSportsHandballSharp.displayName = 'AmauiIconMaterialSportsHandballSharp';

export default IconMaterialSportsHandballSharp;
