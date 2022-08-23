import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRawOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOffSharpFilled'
      short_name='RawOff'

      {...props}
    >
      <path d="M19.8 22.6 1.4 4.2 2.8 2.8 21.2 21.2ZM18.5 15 17.75 11.95 17.15 14.3 14.7 11.9 14 9H15.5L16.25 12L17 9H18.5L19.25 12L20 9H21.5L20 15ZM8.75 15 9.8 10.8 11 12 12.5 13.5H10.65L10.25 15ZM3 15V9H6.5Q7.1 9 7.55 9.45Q8 9.9 8 10.5V11.5Q8 11.95 7.763 12.312Q7.525 12.675 7.1 12.9L8 15H6.5L5.6 13H4.5V15ZM4.5 11.5H6.5Q6.5 11.5 6.5 11.5Q6.5 11.5 6.5 11.5V10.5Q6.5 10.5 6.5 10.5Q6.5 10.5 6.5 10.5H4.5Z"/>
    </Icon>
  );
});

IconMaterialRawOffSharpFilled.displayName = 'AmauiIconMaterialRawOffSharpFilled';

export default IconMaterialRawOffSharpFilled;
