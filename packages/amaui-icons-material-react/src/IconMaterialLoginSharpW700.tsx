import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginSharpW700'
      short_name='Login'

      {...props}
    >
      <path d="M9.25 18.2 7.05 15.975 9.45 13.575H1.8V10.425H9.45L7.05 8.025L9.25 5.8L15.45 12ZM11.8 21.85V18.7H19.05V5.3H11.8V2.15H22.2V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLoginSharpW700;
