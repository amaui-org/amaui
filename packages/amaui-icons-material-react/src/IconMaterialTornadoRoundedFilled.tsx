import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoRoundedFilled'
      short_name='Tornado'

      {...props}
    >
      <path d="M3.9 8 2.75 6Q2.175 5 2.738 4Q3.3 3 4.475 3H19.525Q20.7 3 21.263 4Q21.825 5 21.25 6L20.1 8ZM6.8 13 5.05 10H18.95L17.2 13ZM10.275 19 7.95 15H16.05L13.725 19Q13.15 20 12 20Q10.85 20 10.275 19Z"/>
    </Icon>
  );
});

IconMaterialTornadoRoundedFilled.displayName = 'AmauiIconMaterialTornadoRoundedFilled';

export default IconMaterialTornadoRoundedFilled;
