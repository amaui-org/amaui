import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotationDownSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDownSharp'
      short_name='TextRotationDown'

      {...props}
    >
      <path d="M6 21 2.5 17.55 3.95 16.15 5 17.2V4H7V17.2L8.05 16.15L9.45 17.55ZM10 17.1V15.2L12.8 14.25V9.8L10 8.8V6.9L21 11V13ZM14.4 13.65 18.95 12.05V11.95L14.4 10.35Z"/>
    </Icon>
  );
});

export default IconMaterialTextRotationDownSharp;
