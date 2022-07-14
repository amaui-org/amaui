import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScienceSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceSharp'
      short_name='Science'

      {...props}
    >
      <path d="M5 21Q3.725 21 3.188 19.863Q2.65 18.725 3.45 17.75L9 11V5H7V3H17V5H15V11L20.55 17.75Q21.35 18.725 20.812 19.863Q20.275 21 19 21ZM5 19H19L13 11.7V5H11V11.7ZM12 12Z"/>
    </Icon>
  );
});

export default IconMaterialScienceSharp;
