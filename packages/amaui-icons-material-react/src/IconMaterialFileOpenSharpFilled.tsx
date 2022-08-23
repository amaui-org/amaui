import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileOpenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenSharpFilled'
      short_name='FileOpen'

      {...props}
    >
      <path d="M21.95 22.375 19 19.425V21.65H17V16H22.65V18H20.4L23.35 20.95ZM13 9H18L13 4ZM4 22V2H14L20 8V14H15V22Z"/>
    </Icon>
  );
});

IconMaterialFileOpenSharpFilled.displayName = 'AmauiIconMaterialFileOpenSharpFilled';

export default IconMaterialFileOpenSharpFilled;
