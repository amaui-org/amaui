import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUndoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoRounded'
      short_name='Undo'

      {...props}
    >
      <path d="M8 19Q7.575 19 7.287 18.712Q7 18.425 7 18Q7 17.575 7.287 17.288Q7.575 17 8 17H14.1Q15.675 17 16.837 16Q18 15 18 13.5Q18 12 16.837 11Q15.675 10 14.1 10H7.8L9.7 11.9Q9.975 12.175 9.975 12.6Q9.975 13.025 9.7 13.3Q9.425 13.575 9 13.575Q8.575 13.575 8.3 13.3L4.7 9.7Q4.55 9.55 4.487 9.375Q4.425 9.2 4.425 9Q4.425 8.8 4.487 8.625Q4.55 8.45 4.7 8.3L8.3 4.7Q8.575 4.425 9 4.425Q9.425 4.425 9.7 4.7Q9.975 4.975 9.975 5.4Q9.975 5.825 9.7 6.1L7.8 8H14.1Q16.525 8 18.263 9.575Q20 11.15 20 13.5Q20 15.85 18.263 17.425Q16.525 19 14.1 19Z"/>
    </Icon>
  );
});

IconMaterialUndoRounded.displayName = 'AmauiIconMaterialUndoRounded';

export default IconMaterialUndoRounded;
