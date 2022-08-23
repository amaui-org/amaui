import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRttSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RttSharp'
      short_name='Rtt'

      {...props}
    >
      <path d="M9.125 21 9.525 18.45H11.85L13.9 5.55H11.4L10.675 10.05H8.025L9.15 3H22.125L21 10.05H18.35L19.05 5.55H16.55L14.5 18.45H16.825L16.425 21ZM3.75 7 4.075 5H7.825L7.5 7ZM3.125 11 3.45 9H7.2L6.875 11ZM1.875 19 2.175 17H8.425L8.125 19ZM2.5 15 2.825 13H9.075L8.75 15Z"/>
    </Icon>
  );
});

IconMaterialRttSharp.displayName = 'AmauiIconMaterialRttSharp';

export default IconMaterialRttSharp;
