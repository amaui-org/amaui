import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialColorizeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeRounded'
      short_name='Colorize'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V16.675Q3 16.475 3.075 16.288Q3.15 16.1 3.3 15.95L11.95 7.3L11.2 6.55Q10.9 6.25 10.913 5.838Q10.925 5.425 11.225 5.125Q11.525 4.825 11.938 4.825Q12.35 4.825 12.65 5.125L13.825 6.325L16.9 3.25Q17.175 2.975 17.6 2.975Q18.025 2.975 18.3 3.25L20.7 5.65Q20.975 5.925 20.975 6.35Q20.975 6.775 20.7 7.05L17.625 10.125L18.875 11.375Q19.175 11.675 19.175 12.075Q19.175 12.475 18.875 12.775Q18.575 13.075 18.163 13.075Q17.75 13.075 17.45 12.775L16.7 12.05L8.05 20.7Q7.9 20.85 7.713 20.925Q7.525 21 7.325 21ZM5 19H6.95L15.25 10.65L13.35 8.75L5 17.05ZM16.175 8.75 18.575 6.35 17.6 5.375 15.2 7.775ZM16.175 8.75 15.2 7.775 16.175 8.75Z"/>
    </Icon>
  );
});

IconMaterialColorizeRounded.displayName = 'AmauiIconMaterialColorizeRounded';

export default IconMaterialColorizeRounded;
