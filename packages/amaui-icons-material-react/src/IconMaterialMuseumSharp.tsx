import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMuseumSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumSharp'
      short_name='Museum'

      {...props}
    >
      <path d="M2 22V20H4V11H2V9L12 2L22 9V11H20V20H22V22ZM6 20H12H18ZM8 18H10V14L12 17L14 14V18H16V11H14L12 14L10 11H8ZM18 20V8.65L12 4.45L6 8.65V20Z"/>
    </Icon>
  );
});

export default IconMaterialMuseumSharp;
