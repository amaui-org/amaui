import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandslideRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideRoundedFilled'
      short_name='Landslide'

      {...props}
    >
      <path d="M2 20V17.75L6 19.05L17.025 15.375L19.6 18.8Q20.35 19.8 19.8 20.9Q19.25 22 18 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20ZM6 16.95 2 15.6V13.75L6 15.05L12.9 12.75L15.45 13.775ZM19.6 13.5 21.8 12.525Q22.35 12.275 22.675 11.787Q23 11.3 23 10.7V9.6Q23 8.9 22.562 8.35Q22.125 7.8 21.425 7.65L19.425 7.2Q18.975 7.1 18.538 7.212Q18.1 7.325 17.75 7.6L16.75 8.4Q16.4 8.675 16.2 9.087Q16 9.5 16 9.95V11.05Q16 11.5 16.2 11.912Q16.4 12.325 16.75 12.6L17.55 13.25Q17.975 13.6 18.538 13.662Q19.1 13.725 19.6 13.5ZM6 12.95 2 11.6V10Q2 9.175 2.588 8.587Q3.175 8 4 8H7Q7.475 8 7.9 8.212Q8.325 8.425 8.6 8.8L10.575 11.425ZM12.975 7.6 15.75 6.5Q16.325 6.275 16.663 5.775Q17 5.275 17 4.65V2.65Q17 1.925 16.55 1.362Q16.1 0.8 15.4 0.675L12.8 0.15Q12.4 0.075 12.025 0.15Q11.65 0.225 11.3 0.45L9.9 1.4Q9.475 1.675 9.238 2.125Q9 2.575 9 3.075V4.925Q9 5.425 9.238 5.875Q9.475 6.325 9.9 6.6L11.125 7.425Q11.55 7.7 12.038 7.75Q12.525 7.8 12.975 7.6Z"/>
    </Icon>
  );
});

IconMaterialLandslideRoundedFilled.displayName = 'AmauiIconMaterialLandslideRoundedFilled';

export default IconMaterialLandslideRoundedFilled;
