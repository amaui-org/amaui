import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifSharpW100'
      short_name='Gif'

      {...props}
    >
      <path d="M11.9 14.6V9.4H12.6V14.6ZM5.7 14.6V9.4H9.9V10.1H6.4V13.9H9.2V12.2H9.9V14.6ZM14.6 14.6V9.4H18.3V10.1H15.3V11.7H17.3V12.4H15.3V14.6Z"/>
    </Icon>
  )
});

export default IconMaterialGifSharpW100;
