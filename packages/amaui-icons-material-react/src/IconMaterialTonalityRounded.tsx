import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTonalityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TonalityRounded'
      short_name='Tonality'

      {...props}
    >
      <path d="M11 19.95V4.05Q7.975 4.425 5.988 6.7Q4 8.975 4 12Q4 15.025 5.988 17.3Q7.975 19.575 11 19.95ZM13 5H15.85Q15.2 4.6 14.475 4.387Q13.75 4.175 13 4.05ZM13 8H18.9Q18.75 7.725 18.6 7.475Q18.45 7.225 18.25 7H13ZM13 11H19.95Q19.9 10.75 19.85 10.5Q19.8 10.25 19.75 10H13ZM13 19.95Q13.75 19.825 14.475 19.612Q15.2 19.4 15.85 19H13ZM13 17H18.25Q18.45 16.775 18.6 16.525Q18.75 16.275 18.9 16H13ZM13 14H19.75Q19.8 13.75 19.85 13.5Q19.9 13.25 19.95 13H13ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialTonalityRounded.displayName = 'AmauiIconMaterialTonalityRounded';

export default IconMaterialTonalityRounded;
