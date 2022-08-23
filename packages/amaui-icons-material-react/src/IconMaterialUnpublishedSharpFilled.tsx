import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnpublishedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedSharpFilled'
      short_name='Unpublished'

      {...props}
    >
      <path d="M20.475 23.3 17.525 20.35Q16.325 21.15 14.938 21.575Q13.55 22 12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 10.45 2.425 9.062Q2.85 7.675 3.65 6.475L0.675 3.5L2.1 2.075L21.9 21.875ZM20.375 17.5 15.05 12.15 17.65 9.55 16.25 8.15 13.65 10.775 6.5 3.625Q7.7 2.85 9.088 2.425Q10.475 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 13.525 21.575 14.912Q21.15 16.3 20.375 17.5ZM10.6 16.6 12.2 15 10.8 13.6 10.6 13.8 7.75 10.95 6.35 12.35Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedSharpFilled.displayName = 'AmauiIconMaterialUnpublishedSharpFilled';

export default IconMaterialUnpublishedSharpFilled;
