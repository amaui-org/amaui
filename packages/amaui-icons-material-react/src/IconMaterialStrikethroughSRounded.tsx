import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStrikethroughSRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSRounded'
      short_name='StrikethroughS'

      {...props}
    >
      <path d="M12.15 20Q10.525 20 9.225 19.188Q7.925 18.375 7.125 16.9Q6.9 16.475 7.075 16Q7.25 15.525 7.75 15.325Q8.175 15.125 8.613 15.3Q9.05 15.475 9.325 15.925Q9.775 16.675 10.512 17.138Q11.25 17.6 12.2 17.6Q13.25 17.6 14.1 17.1Q14.95 16.6 14.95 15.5Q14.95 15.05 14.775 14.675Q14.6 14.3 14.3 14H17.1Q17.225 14.35 17.288 14.712Q17.35 15.075 17.35 15.5Q17.35 17.65 15.812 18.825Q14.275 20 12.15 20ZM3 12Q2.575 12 2.288 11.712Q2 11.425 2 11Q2 10.575 2.288 10.287Q2.575 10 3 10H21Q21.425 10 21.712 10.287Q22 10.575 22 11Q22 11.425 21.712 11.712Q21.425 12 21 12ZM7.25 8Q7.25 8 7.25 8Q7.25 8 7.25 8Q7.3 6.275 8.613 5.062Q9.925 3.85 12.05 3.85Q13.4 3.85 14.475 4.387Q15.55 4.925 16.275 6.05Q16.55 6.475 16.375 6.95Q16.2 7.425 15.7 7.65Q15.325 7.825 14.888 7.688Q14.45 7.55 14.1 7.125Q13.775 6.75 13.275 6.5Q12.775 6.25 12.1 6.25Q11.075 6.25 10.4 6.713Q9.725 7.175 9.65 8Q9.65 8 9.65 8Q9.65 8 9.65 8Z"/>
    </Icon>
  );
});

IconMaterialStrikethroughSRounded.displayName = 'AmauiIconMaterialStrikethroughSRounded';

export default IconMaterialStrikethroughSRounded;
