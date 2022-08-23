import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBuildCircleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildCircleSharpFilled'
      short_name='BuildCircle'

      {...props}
    >
      <path d="M9.525 10.925 7.175 8.575Q6.975 8.975 6.863 9.4Q6.75 9.825 6.75 10.25Q6.75 11.675 7.763 12.688Q8.775 13.7 10.2 13.7Q10.525 13.7 10.812 13.65Q11.1 13.6 11.375 13.5L15.15 17.25L17.25 15.15L13.5 11.375Q13.6 11.15 13.65 10.862Q13.7 10.575 13.7 10.2Q13.7 8.775 12.688 7.762Q11.675 6.75 10.25 6.75Q9.825 6.75 9.4 6.862Q8.975 6.975 8.575 7.175L10.925 9.525ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialBuildCircleSharpFilled.displayName = 'AmauiIconMaterialBuildCircleSharpFilled';

export default IconMaterialBuildCircleSharpFilled;
