import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSweepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SweepFilled'

      short_name='Sweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240q-17 0-28.5-11.5T400-280q0-17 11.5-28.5T440-320h160q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240H440ZM242-354l338.858-339q12.03-12 28.071-12 16.041 0 28.071 12 12 12 12 28.5T637-636L270.133-268q-12.029 12-28.067 12T214-268L42-439.75q-12-12.053-11.5-28.625T43-497q12-12 28.5-12t28.5 12l142 143Zm358-46q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480h160q17 0 28.5 11.5T800-440q0 17-11.5 28.5T760-400H600Zm160-160q-17 0-28.5-11.5T720-600q0-17 11.5-28.5T760-640h160q17 0 28.5 11.5T960-600q0 17-11.5 28.5T920-560H760Z"/>
    </Icon>
  );
});

IconMaterialSweepFilled.displayName = 'AmauiIconMaterialSweepFilled';

export default IconMaterialSweepFilled;
