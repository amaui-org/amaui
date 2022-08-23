import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddModeratorSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorSharp'
      short_name='AddModerator'

      {...props}
    >
      <path d="M12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V10.675Q19.525 10.475 19.025 10.312Q18.525 10.15 18 10.075V6.4L12 4.15L6 6.4V11.1Q6 12.275 6.312 13.45Q6.625 14.625 7.188 15.688Q7.75 16.75 8.55 17.65Q9.35 18.55 10.325 19.15Q10.6 19.95 11.05 20.675Q11.5 21.4 12.075 21.975Q12.05 21.975 12.038 21.988Q12.025 22 12 22ZM17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM16.5 20H17.5V17.5H20V16.5H17.5V14H16.5V16.5H14V17.5H16.5ZM12 11.65Q12 11.65 12 11.65Q12 11.65 12 11.65Q12 11.65 12 11.65Q12 11.65 12 11.65Q12 11.65 12 11.65Q12 11.65 12 11.65Q12 11.65 12 11.65Q12 11.65 12 11.65Q12 11.65 12 11.65Q12 11.65 12 11.65Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorSharp.displayName = 'AmauiIconMaterialAddModeratorSharp';

export default IconMaterialAddModeratorSharp;
