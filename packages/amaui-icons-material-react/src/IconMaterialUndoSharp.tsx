import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUndoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoSharp'
      short_name='Undo'

      {...props}
    >
      <path d="M14.1 19H7V17H14.1Q15.675 17 16.837 16Q18 15 18 13.5Q18 12 16.837 11Q15.675 10 14.1 10H7.8L10.4 12.6L9 14L4 9L9 4L10.4 5.4L7.8 8H14.1Q16.525 8 18.263 9.575Q20 11.15 20 13.5Q20 15.85 18.263 17.425Q16.525 19 14.1 19Z"/>
    </Icon>
  );
});

IconMaterialUndoSharp.displayName = 'AmauiIconMaterialUndoSharp';

export default IconMaterialUndoSharp;
