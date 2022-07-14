import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridOnSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOnSharp'
      short_name='GridOn'

      {...props}
    >
      <path d="M2 22V2H22V22ZM4 20H8V16H4ZM4 14H8V10H4ZM4 8H8V4H4ZM10 20H14V16H10ZM10 14H14V10H10ZM10 8H14V4H10ZM16 20H20V16H16ZM16 14H20V10H16ZM16 8H20V4H16Z"/>
    </Icon>
  );
});

export default IconMaterialGridOnSharp;
