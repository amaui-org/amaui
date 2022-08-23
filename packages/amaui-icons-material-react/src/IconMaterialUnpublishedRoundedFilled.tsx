import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnpublishedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedRoundedFilled'
      short_name='Unpublished'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 10.45 2.425 9.062Q2.85 7.675 3.65 6.475L1.375 4.2Q1.075 3.9 1.075 3.487Q1.075 3.075 1.375 2.775Q1.675 2.475 2.087 2.475Q2.5 2.475 2.8 2.775L21.2 21.175Q21.5 21.475 21.488 21.875Q21.475 22.275 21.175 22.575Q20.875 22.875 20.462 22.875Q20.05 22.875 19.75 22.575L17.525 20.35Q16.325 21.15 14.938 21.575Q13.55 22 12 22ZM20.375 17.5 15.05 12.15 16.95 10.25Q17.225 9.975 17.225 9.55Q17.225 9.125 16.95 8.85Q16.675 8.575 16.25 8.575Q15.825 8.575 15.55 8.85L13.65 10.775L6.5 3.625Q7.7 2.85 9.088 2.425Q10.475 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 13.525 21.575 14.912Q21.15 16.3 20.375 17.5ZM12.2 15 10.8 13.6 10.6 13.8 8.45 11.65Q8.175 11.375 7.75 11.375Q7.325 11.375 7.05 11.65Q6.775 11.925 6.775 12.35Q6.775 12.775 7.05 13.05L9.9 15.9Q10.2 16.2 10.6 16.2Q11 16.2 11.3 15.9Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedRoundedFilled.displayName = 'AmauiIconMaterialUnpublishedRoundedFilled';

export default IconMaterialUnpublishedRoundedFilled;
