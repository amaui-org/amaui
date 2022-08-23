import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUndoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UndoSharpW100'
      short_name='Undo'

      {...props}
    >
      <path d="M13.975 18.35H7.525V17.65H13.975Q15.825 17.65 17.175 16.475Q18.525 15.3 18.525 13.5Q18.525 11.7 17.175 10.525Q15.825 9.35 13.975 9.35H6.125L9.375 12.6L8.875 13.1L4.775 9L8.875 4.9L9.375 5.4L6.125 8.65H13.975Q16.1 8.65 17.663 10.037Q19.225 11.425 19.225 13.5Q19.225 15.575 17.663 16.962Q16.1 18.35 13.975 18.35Z"/>
    </Icon>
  );
});

IconMaterialUndoSharpW100.displayName = 'AmauiIconMaterialUndoSharpW100';

export default IconMaterialUndoSharpW100;
