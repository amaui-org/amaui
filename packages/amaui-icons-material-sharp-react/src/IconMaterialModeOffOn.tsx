import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeOffOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeOffOn'

      short_name='ModeOffOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q-.425 0-.712-.288Q11 11.425 11 11V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v8q0 .425-.287.712Q12.425 12 12 12Zm0 9q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 13.875 3 12q0-1.575.513-3.012Q4.025 7.55 4.95 6.4q.275-.35.7-.338.425.013.75.338.275.275.25.675-.025.4-.275.75-.65.875-1.012 1.937Q5 10.825 5 12q0 2.925 2.038 4.962Q9.075 19 12 19t4.962-2.038Q19 14.925 19 12q0-1.175-.362-2.263-.363-1.087-1.038-1.962-.25-.325-.275-.713-.025-.387.25-.662.3-.3.725-.313.425-.012.7.313.95 1.15 1.475 2.588Q21 10.425 21 12q0 1.875-.712 3.512-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialModeOffOn.displayName = 'AmauiIconMaterialModeOffOn';

export default IconMaterialModeOffOn;
