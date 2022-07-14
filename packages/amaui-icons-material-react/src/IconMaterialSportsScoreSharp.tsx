import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsScoreSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsScoreSharp'
      short_name='SportsScore'

      {...props}
    >
      <path d="M9 6H11V4H9ZM13 6V4H15V6ZM9 14V12H11V14ZM17 10V8H19V10ZM17 14V12H19V14ZM13 14V12H15V14ZM17 6V4H19V6ZM11 8V6H13V8ZM5 20V4H7V6H9V8H7V10H9V12H7V20ZM15 12V10H17V12ZM11 12V10H13V12ZM9 10V8H11V10ZM13 10V8H15V10ZM15 8V6H17V8Z"/>
    </Icon>
  );
});

export default IconMaterialSportsScoreSharp;
