import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrassSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GrassSharpFilled'
      short_name='Grass'

      {...props}
    >
      <path d="M2 20V18H7.75Q7.2 15.875 5.662 14.337Q4.125 12.8 2 12.25Q2.5 12.125 2.987 12.062Q3.475 12 4 12Q7.35 12 9.675 14.325Q12 16.65 12 20ZM14 20Q14 18.95 13.775 17.913Q13.55 16.875 13.125 15.925Q14.175 14.15 15.988 13.075Q17.8 12 20 12Q20.525 12 21.013 12.062Q21.5 12.125 22 12.25Q19.875 12.8 18.35 14.337Q16.825 15.875 16.25 18H22V20ZM12 14.025Q12 12.4 12.6 10.975Q13.2 9.55 14.25 8.462Q15.3 7.375 16.712 6.725Q18.125 6.075 19.725 6.025Q18.325 6.9 17.275 8.175Q16.225 9.45 15.65 11.025Q14.55 11.55 13.638 12.312Q12.725 13.075 12 14.025ZM10.175 12.15Q9.875 11.925 9.575 11.725Q9.275 11.525 8.95 11.325Q8.95 11.175 8.975 11.012Q9 10.85 9 10.7Q9 8.8 8.4 7.1Q7.8 5.4 6.7 4Q8.35 4.675 9.562 5.937Q10.775 7.2 11.425 8.85Q10.975 9.6 10.65 10.438Q10.325 11.275 10.175 12.15Z"/>
    </Icon>
  );
});

IconMaterialGrassSharpFilled.displayName = 'AmauiIconMaterialGrassSharpFilled';

export default IconMaterialGrassSharpFilled;
