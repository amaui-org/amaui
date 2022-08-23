import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageRoundedW100'
      short_name='HideImage'

      {...props}
    >
      <path d="M19.7 16.85 19 16.15V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H7.85L7.15 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8ZM20.45 21.45 18.7 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.3L2.55 3.55Q2.45 3.45 2.438 3.312Q2.425 3.175 2.55 3.05Q2.675 2.925 2.8 2.925Q2.925 2.925 3.05 3.05L20.95 20.95Q21.05 21.05 21.062 21.188Q21.075 21.325 20.95 21.45Q20.825 21.575 20.7 21.575Q20.575 21.575 20.45 21.45ZM11.2 16.05 12.925 13.925 5 6V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H18L15.35 16.35H8.75Q8.5 16.35 8.4 16.125Q8.3 15.9 8.45 15.7L9.3 14.6Q9.425 14.45 9.613 14.438Q9.8 14.425 9.925 14.575ZM12 12Q12 12 12 12Q12 12 12 12ZM11.5 12.5Q11.5 12.5 11.5 12.5Q11.5 12.5 11.5 12.5Z"/>
    </Icon>
  );
});

IconMaterialHideImageRoundedW100.displayName = 'AmauiIconMaterialHideImageRoundedW100';

export default IconMaterialHideImageRoundedW100;
