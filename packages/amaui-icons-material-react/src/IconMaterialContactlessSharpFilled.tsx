import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactlessSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessSharpFilled'
      short_name='Contactless'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM14.85 17.35Q15.375 16.1 15.637 14.762Q15.9 13.425 15.9 12Q15.9 10.575 15.637 9.237Q15.375 7.9 14.85 6.65L13 7.45Q13.45 8.5 13.675 9.65Q13.9 10.8 13.9 12Q13.9 13.2 13.675 14.35Q13.45 15.5 13 16.55ZM11.6 16Q12.025 15.05 12.213 14.05Q12.4 13.05 12.4 12Q12.4 10.95 12.213 9.95Q12.025 8.95 11.6 8L9.75 8.75Q10.1 9.5 10.25 10.312Q10.4 11.125 10.4 12Q10.4 12.875 10.25 13.688Q10.1 14.5 9.75 15.25ZM8.4 14.65Q8.625 14.05 8.762 13.387Q8.9 12.725 8.9 12Q8.9 11.275 8.762 10.612Q8.625 9.95 8.4 9.35L6.55 10.1Q6.7 10.55 6.8 11.025Q6.9 11.5 6.9 12Q6.9 12.5 6.8 12.975Q6.7 13.45 6.55 13.9Z"/>
    </Icon>
  );
});

IconMaterialContactlessSharpFilled.displayName = 'AmauiIconMaterialContactlessSharpFilled';

export default IconMaterialContactlessSharpFilled;
