import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCottageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageSharpW100'
      short_name='Cottage'

      {...props}
    >
      <path d="M5.3 19.7V10.625L3.325 12.15L2.9 11.6L5.3 9.75V7.25H6V9.2L12 4.625L21.1 11.6L20.675 12.15L18.7 10.625V19.7ZM6 19H10.5V14H13.5V19H18V10.1L12 5.525L6 10.1ZM5.3 6Q5.3 5.2 5.788 4.625Q6.275 4.05 7.3 4.05Q8.025 4.05 8.312 3.687Q8.6 3.325 8.6 2.8H9.3Q9.3 3.6 8.812 4.175Q8.325 4.75 7.3 4.75Q6.575 4.75 6.287 5.112Q6 5.475 6 6ZM6 19H10.5H13.5H18H12H6Z"/>
    </Icon>
  );
});

IconMaterialCottageSharpW100.displayName = 'AmauiIconMaterialCottageSharpW100';

export default IconMaterialCottageSharpW100;
