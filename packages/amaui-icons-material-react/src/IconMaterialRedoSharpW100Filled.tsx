import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRedoSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoSharpW100Filled'
      short_name='Redo'

      {...props}
    >
      <path d="M10.025 18.35Q7.9 18.35 6.338 16.962Q4.775 15.575 4.775 13.5Q4.775 11.425 6.338 10.037Q7.9 8.65 10.025 8.65H17.875L14.625 5.4L15.125 4.9L19.225 9L15.125 13.1L14.625 12.6L17.875 9.35H10.025Q8.175 9.35 6.825 10.525Q5.475 11.7 5.475 13.5Q5.475 15.3 6.825 16.475Q8.175 17.65 10.025 17.65H16.475V18.35Z"/>
    </Icon>
  );
});

IconMaterialRedoSharpW100Filled.displayName = 'AmauiIconMaterialRedoSharpW100Filled';

export default IconMaterialRedoSharpW100Filled;
