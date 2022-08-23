import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPianoOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOffSharpW100Filled'
      short_name='PianoOff'

      {...props}
    >
      <path d="M19.85 20.85 18.65 19.65Q18.525 19.675 18.425 19.688Q18.325 19.7 18.2 19.7H4.3V5.8Q4.3 5.675 4.312 5.575Q4.325 5.475 4.35 5.35L3.15 4.15L3.65 3.65L20.35 20.35ZM19.7 16.9 19 16.2V5H16.475V13.675L13.275 10.475V5H10.725V7.925L7.1 4.3H19.7ZM5 19H8.775V14.1H7.525V8.525L5 6ZM9.475 19H14.525V15.525L10.725 11.725V14.1H9.475ZM15.225 19H18L15.225 16.225Z"/>
    </Icon>
  );
});

IconMaterialPianoOffSharpW100Filled.displayName = 'AmauiIconMaterialPianoOffSharpW100Filled';

export default IconMaterialPianoOffSharpW100Filled;
