import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRedoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoSharp'
      short_name='Redo'

      {...props}
    >
      <path d="M9.9 19Q7.475 19 5.738 17.425Q4 15.85 4 13.5Q4 11.15 5.738 9.575Q7.475 8 9.9 8H16.2L13.6 5.4L15 4L20 9L15 14L13.6 12.6L16.2 10H9.9Q8.325 10 7.163 11Q6 12 6 13.5Q6 15 7.163 16Q8.325 17 9.9 17H17V19Z"/>
    </Icon>
  );
});

IconMaterialRedoSharp.displayName = 'AmauiIconMaterialRedoSharp';

export default IconMaterialRedoSharp;
