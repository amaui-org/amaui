import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddModeratorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorSharpFilled'
      short_name='AddModerator'

      {...props}
    >
      <path d="M17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM16.5 20H17.5V17.5H20V16.5H17.5V14H16.5V16.5H14V17.5H16.5ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V10.675Q19.35 10.35 18.538 10.175Q17.725 10 17 10Q14.1 10 12.05 12.05Q10 14.1 10 17Q10 18.55 10.588 19.8Q11.175 21.05 12.075 21.975Q12.05 21.975 12.038 21.988Q12.025 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorSharpFilled.displayName = 'AmauiIconMaterialAddModeratorSharpFilled';

export default IconMaterialAddModeratorSharpFilled;
