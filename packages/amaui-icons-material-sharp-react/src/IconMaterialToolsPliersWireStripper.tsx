import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsPliersWireStripper = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPliersWireStripper'

      short_name='ToolsPliersWireStripper'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 23q-.5-1-.75-2.45Q6 19.1 6 17.6q0-2.475.55-4.088Q7.1 11.9 8 11V6l3-5h2l3 5v5q.925.9 1.462 2.512Q18 15.125 18 17.6q0 1.5-.25 2.95Q17.5 22 17 23q-1.05-.325-1.675-1.188-.625-.862-.6-1.962 0-.625.138-1.35.137-.725.137-1.45 0-1.45-.787-3.05-.788-1.6-2.213-3-1.4 1.4-2.2 3-.8 1.6-.8 3.05 0 .725.15 1.45t.175 1.35q0 1.1-.637 1.975Q8.05 22.7 7 23Zm5-15q-.425 0-.712-.287Q11 7.425 11 7q0-.275.125-.5.125-.225.375-.35V4.025L10 6.55V9h4V6.55l-1.5-2.525V6.15q.25.125.375.35.125.225.125.5 0 .425-.287.713Q12.425 8 12 8Zm.5-3.975h-1 1Zm-1 0h1Z"/>
    </Icon>
  );
});

IconMaterialToolsPliersWireStripper.displayName = 'AmauiIconMaterialToolsPliersWireStripper';

export default IconMaterialToolsPliersWireStripper;
