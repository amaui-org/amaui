import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCakeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeW100'

      short_name='Cake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.95 20.7q-.3 0-.475-.2T4.3 20v-4.7q0-.65.425-1.075Q5.15 13.8 5.8 13.8h.5V9.6q0-.65.425-1.075Q7.15 8.1 7.8 8.1h3.85V6.6q-.425-.275-.712-.613-.288-.337-.288-.787 0-.275.1-.512.1-.238.3-.438l.675-.675q.05-.05.275-.1.025 0 .275.1l.675.675q.2.2.3.438.1.237.1.512 0 .45-.288.787-.287.338-.712.613v1.5h3.85q.65 0 1.075.425.425.425.425 1.075v4.2h.5q.65 0 1.075.425.425.425.425 1.075V20q0 .3-.2.5t-.5.2ZM7 13.8h10V9.6q0-.35-.225-.575Q16.55 8.8 16.2 8.8H7.8q-.35 0-.575.225Q7 9.25 7 9.6ZM5 20h14v-4.7q0-.35-.225-.575-.225-.225-.575-.225H5.8q-.35 0-.575.225Q5 14.95 5 15.3Zm2-6.2h10ZM5 20h14Zm12.7-6.2H6.3h11.4Z"/>
    </Icon>
  );
});

IconMaterialCakeW100.displayName = 'AmauiIconMaterialCakeW100';

export default IconMaterialCakeW100;
