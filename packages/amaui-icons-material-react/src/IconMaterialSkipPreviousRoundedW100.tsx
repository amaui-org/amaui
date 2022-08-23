import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipPreviousRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousRoundedW100'
      short_name='SkipPrevious'

      {...props}
    >
      <path d="M7.45 16.2Q7.3 16.2 7.2 16.1Q7.1 16 7.1 15.85V8.15Q7.1 8 7.2 7.9Q7.3 7.8 7.45 7.8Q7.6 7.8 7.7 7.9Q7.8 8 7.8 8.15V15.85Q7.8 16 7.7 16.1Q7.6 16.2 7.45 16.2ZM15.725 15.425 11.525 12.625Q11.175 12.4 11.175 12Q11.175 11.6 11.525 11.375L15.725 8.575Q16.1 8.3 16.5 8.525Q16.9 8.75 16.9 9.2V14.8Q16.9 15.25 16.5 15.475Q16.1 15.7 15.725 15.425ZM16.2 12ZM16.2 14.9V9.1L11.85 12Z"/>
    </Icon>
  );
});

IconMaterialSkipPreviousRoundedW100.displayName = 'AmauiIconMaterialSkipPreviousRoundedW100';

export default IconMaterialSkipPreviousRoundedW100;
