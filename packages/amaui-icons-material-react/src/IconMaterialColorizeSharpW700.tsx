import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialColorizeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeSharpW700'
      short_name='Colorize'

      {...props}
    >
      <path d="M2.15 21.85V15.9L10.75 7.3L9.275 5.9L11.95 3.3L13.85 5.2L17.6 1.375L22.625 6.4L18.8 10.15L20.7 12.1L18.1 14.7L16.7 13.25L8.1 21.85ZM5.3 18.7H6.825L14.825 10.65L13.35 9.175L5.3 17.175ZM16.55 8.475 18.7 6.35 17.65 5.3 15.525 7.45ZM16.55 8.475 15.525 7.45 16.55 8.475Z"/>
    </Icon>
  )
});

export default IconMaterialColorizeSharpW700;
