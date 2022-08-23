import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneOutlineRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineRounded'
      short_name='DoneOutline'

      {...props}
    >
      <path d="M9.525 18 20.125 7.4 18.7 6 9.5 15.175 5.275 10.925 3.85 12.35ZM9.525 20Q9.15 20 8.775 19.85Q8.4 19.7 8.1 19.4L2.45 13.75Q2.15 13.45 2.013 13.087Q1.875 12.725 1.875 12.35Q1.875 11.975 2.013 11.6Q2.15 11.225 2.45 10.925L3.85 9.525Q4.15 9.225 4.513 9.075Q4.875 8.925 5.275 8.925Q5.675 8.925 6.038 9.075Q6.4 9.225 6.7 9.525L9.525 12.35L17.275 4.575Q17.55 4.275 17.925 4.137Q18.3 4 18.675 4Q19.05 4 19.425 4.137Q19.8 4.275 20.1 4.55L21.525 5.95Q21.825 6.25 21.975 6.612Q22.125 6.975 22.125 7.375Q22.125 7.775 21.988 8.137Q21.85 8.5 21.55 8.8L10.95 19.4Q10.65 19.7 10.275 19.85Q9.9 20 9.525 20Z"/>
    </Icon>
  );
});

IconMaterialDoneOutlineRounded.displayName = 'AmauiIconMaterialDoneOutlineRounded';

export default IconMaterialDoneOutlineRounded;
