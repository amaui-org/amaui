import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleRightRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleRightRoundedFilled'
      short_name='ArrowCircleRight'

      {...props}
    >
      <path d="M12.7 15.3 15.3 12.7Q15.575 12.425 15.575 12Q15.575 11.575 15.3 11.3L12.675 8.675Q12.4 8.4 11.988 8.412Q11.575 8.425 11.3 8.7Q11.025 8.975 11.025 9.4Q11.025 9.825 11.3 10.1L12.2 11H8.975Q8.55 11 8.275 11.287Q8 11.575 8 12Q8 12.425 8.288 12.712Q8.575 13 9 13H12.2L11.275 13.925Q11 14.2 11.012 14.613Q11.025 15.025 11.3 15.3Q11.575 15.575 12 15.575Q12.425 15.575 12.7 15.3ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleRightRoundedFilled.displayName = 'AmauiIconMaterialArrowCircleRightRoundedFilled';

export default IconMaterialArrowCircleRightRoundedFilled;
