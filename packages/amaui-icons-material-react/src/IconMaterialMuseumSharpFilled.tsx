import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMuseumSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumSharpFilled'
      short_name='Museum'

      {...props}
    >
      <path d="M2 22V20H4V11H2V9L12 2L22 9V11H20V20H22V22ZM8 18H10V14L12 17L14 14V18H16V11H14L12 14L10 11H8Z"/>
    </Icon>
  );
});

IconMaterialMuseumSharpFilled.displayName = 'AmauiIconMaterialMuseumSharpFilled';

export default IconMaterialMuseumSharpFilled;
