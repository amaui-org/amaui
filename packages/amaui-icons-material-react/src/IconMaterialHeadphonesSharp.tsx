import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadphonesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesSharp'
      short_name='Headphones'

      {...props}
    >
      <path d="M3 21V12Q3 10.125 3.712 8.487Q4.425 6.85 5.638 5.637Q6.85 4.425 8.488 3.712Q10.125 3 12 3Q13.875 3 15.513 3.712Q17.15 4.425 18.363 5.637Q19.575 6.85 20.288 8.487Q21 10.125 21 12V21H15V13H19V12Q19 9.075 16.962 7.037Q14.925 5 12 5Q9.075 5 7.038 7.037Q5 9.075 5 12V13H9V21ZM5 19H7V15H5ZM17 19H19V15H17ZM5 19H7ZM17 19H19Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesSharp.displayName = 'AmauiIconMaterialHeadphonesSharp';

export default IconMaterialHeadphonesSharp;
