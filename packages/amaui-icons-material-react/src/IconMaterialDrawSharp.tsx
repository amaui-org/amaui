import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDrawSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawSharp'
      short_name='Draw'

      {...props}
    >
      <path d="M13 21V19H14Q15.175 19 16.087 18.538Q17 18.075 17 17.5Q17 17.15 16.675 16.85Q16.35 16.55 15.775 16.3L17.25 14.825Q18.05 15.3 18.525 15.95Q19 16.6 19 17.5Q19 19.15 17.425 20.075Q15.85 21 14 21ZM4.575 13.35Q3.85 12.925 3.425 12.362Q3 11.8 3 11Q3 9.95 3.775 9.237Q4.55 8.525 6.55 7.65Q8.125 6.925 8.562 6.637Q9 6.35 9 6Q9 5.6 8.512 5.3Q8.025 5 7 5Q6.125 5 5.562 5.325Q5 5.65 5 6H3Q3 4.8 4.1 3.9Q5.2 3 7 3Q8.8 3 9.9 3.812Q11 4.625 11 6Q11 6.975 10.275 7.75Q9.55 8.525 7.35 9.475Q5.9 10.1 5.45 10.4Q5 10.7 5 11Q5 11.225 5.287 11.438Q5.575 11.65 6.075 11.85ZM18.85 10.4 14.6 6.15 17.075 3.675 21.325 7.925ZM6 19H7.4L14.6 11.8L13.2 10.4L6 17.6ZM4 21V16.75L13.2 7.55L17.45 11.8L8.25 21ZM13.2 10.4 14.6 11.8Z"/>
    </Icon>
  );
});

IconMaterialDrawSharp.displayName = 'AmauiIconMaterialDrawSharp';

export default IconMaterialDrawSharp;
