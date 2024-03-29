import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMotorsportsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMotorsportsFilled'

      short_name='SportsMotorsports'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.4 19.45q-.125 0-.225-.1t-.1-.225q0-1.175.037-2.063.038-.887.113-1.587h7.85q1.725 0 2.938-1.225 1.212-1.225 1.212-3 0-1.275-.712-2.312Q12.8 7.9 11.6 7.4L8.25 6.075q1.35-.75 2.838-1.138 1.487-.387 3.087-.387 3.2 0 5.475 2.162Q21.925 8.875 21.925 12q0 3.125-2.162 5.288-2.163 2.162-5.288 2.162Zm.15-5.95q.5-1.775 1.475-3.338Q5 8.6 6.35 7.4l4.5 1.825q.65.275 1.025.825.375.55.375 1.2 0 .95-.637 1.6-.638.65-1.588.65Z"/>
    </Icon>
  );
});

IconMaterialSportsMotorsportsFilled.displayName = 'AmauiIconMaterialSportsMotorsportsFilled';

export default IconMaterialSportsMotorsportsFilled;
