import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatListNumberedTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumberedTwoTone'
      short_name='FormatListNumbered'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 13H3.2L5 10.9V10H2v1h1.8L2 13.1v.9h3zm2-8h14v2H7zM5 16H2v1h2v.5H3v1h1v.5H2v1h3zm2 1h14v2H7zM3 8h1V4H2v1h1zm4 3h14v2H7z"/>
    </Icon>
  );
});

IconMaterialFormatListNumberedTwoTone.displayName = 'AmauiIconMaterialFormatListNumberedTwoTone';

export default IconMaterialFormatListNumberedTwoTone;
