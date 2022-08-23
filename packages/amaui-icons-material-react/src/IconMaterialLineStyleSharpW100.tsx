import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLineStyleSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStyleSharpW100'
      short_name='LineStyle'

      {...props}
    >
      <path d="M6.25 17.75V17.05H6.95V17.75ZM8.95 17.75V17.05H9.65V17.75ZM11.65 17.75V17.05H12.35V17.75ZM14.35 17.75V17.05H15.05V17.75ZM17.05 17.75V17.05H17.75V17.75ZM6.25 15.05V14.35H9.075V15.05ZM10.575 15.05V14.35H13.4V15.05ZM14.9 15.05V14.35H17.75V15.05ZM6.25 12.35V11.65H11V12.35ZM13 12.35V11.65H17.75V12.35ZM6.25 9.65V6.25H17.75V9.65Z"/>
    </Icon>
  );
});

IconMaterialLineStyleSharpW100.displayName = 'AmauiIconMaterialLineStyleSharpW100';

export default IconMaterialLineStyleSharpW100;
