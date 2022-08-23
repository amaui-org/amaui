import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRawOnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOnSharpFilled'
      short_name='RawOn'

      {...props}
    >
      <path d="M8.75 15 10.25 9H12.75L14.25 15H12.75L12.4 13.5H10.65L10.25 15ZM11 12H12L11.75 11H11.25ZM15.5 15 14 9H15.5L16.25 12L17 9H18.5L19.25 12L20 9H21.5L20 15H18.5L17.75 11.95L17 15ZM3 15V9H6.5Q7.1 9 7.55 9.45Q8 9.9 8 10.5V11.5Q8 11.95 7.763 12.312Q7.525 12.675 7.1 12.9L8 15H6.5L5.6 13H4.5V15ZM4.5 11.5H6.5Q6.5 11.5 6.5 11.5Q6.5 11.5 6.5 11.5V10.5Q6.5 10.5 6.5 10.5Q6.5 10.5 6.5 10.5H4.5Z"/>
    </Icon>
  );
});

IconMaterialRawOnSharpFilled.displayName = 'AmauiIconMaterialRawOnSharpFilled';

export default IconMaterialRawOnSharpFilled;
