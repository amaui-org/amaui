import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPostAddSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddSharpW100'
      short_name='PostAdd'

      {...props}
    >
      <path d="M8 10.35V9.65H14.7V10.35ZM8 13.35V12.65H14.7V13.35ZM8 16.35V15.65H14.7V16.35ZM17.65 7.7V5.7H15.65V5H17.65V3H18.35V5H20.35V5.7H18.35V7.7ZM3.65 19.7V4.3H14.55V5H4.35V19H18.35V8.8H19.05V19.7Z"/>
    </Icon>
  );
});

IconMaterialPostAddSharpW100.displayName = 'AmauiIconMaterialPostAddSharpW100';

export default IconMaterialPostAddSharpW100;
