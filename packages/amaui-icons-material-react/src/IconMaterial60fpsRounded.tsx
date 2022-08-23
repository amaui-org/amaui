import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial60fpsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsRounded'
      short_name='60fps'

      {...props}
    >
      <path d="M5 19Q3.75 19 2.875 18.125Q2 17.25 2 16V8Q2 6.75 2.875 5.875Q3.75 5 5 5H8.5Q9.125 5 9.562 5.438Q10 5.875 10 6.5Q10 7.125 9.562 7.562Q9.125 8 8.5 8H5Q5 8 5 8Q5 8 5 8V10H8Q9.25 10 10.125 10.875Q11 11.75 11 13V16Q11 17.25 10.125 18.125Q9.25 19 8 19ZM5 13V16Q5 16 5 16Q5 16 5 16H8Q8 16 8 16Q8 16 8 16V13Q8 13 8 13Q8 13 8 13ZM15 16H19Q19 16 19 16Q19 16 19 16V8Q19 8 19 8Q19 8 19 8H15Q15 8 15 8Q15 8 15 8V16Q15 16 15 16Q15 16 15 16ZM15 19Q13.75 19 12.875 18.125Q12 17.25 12 16V8Q12 6.75 12.875 5.875Q13.75 5 15 5H19Q20.25 5 21.125 5.875Q22 6.75 22 8V16Q22 17.25 21.125 18.125Q20.25 19 19 19Z"/>
    </Icon>
  );
});

IconMaterial60fpsRounded.displayName = 'AmauiIconMaterial60fpsRounded';

export default IconMaterial60fpsRounded;
