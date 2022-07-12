import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoRounded'
      short_name='Tornado'

      {...props}
    >
      <path d="M4.475 3H19.525Q20.7 3 21.263 4Q21.825 5 21.25 6L13.725 19Q13.15 20 12 20Q10.85 20 10.275 19L2.75 6Q2.175 5 2.738 4Q3.3 3 4.475 3ZM4.475 5 6.2 8H17.8L19.525 5Q19.525 5 19.525 5Q19.525 5 19.525 5H4.475Q4.475 5 4.475 5Q4.475 5 4.475 5ZM7.375 10 9.1 13H14.9L16.625 10ZM10.275 15 12 18Q12 18 12 18Q12 18 12 18L13.725 15Z"/>
    </Icon>
  )
});

export default IconMaterialTornadoRounded;
