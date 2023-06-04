import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyW100'

      short_name='Key'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 13q-.425 0-.713-.288Q6 12.425 6 12t.287-.713Q6.575 11 7 11t.713.287Q8 11.575 8 12t-.287.712Q7.425 13 7 13Zm0 3.7q-1.95 0-3.325-1.375Q2.3 13.95 2.3 12q0-1.95 1.375-3.325Q5.05 7.3 7 7.3q1.5 0 2.7.837 1.2.838 1.7 2.163h9.325l1.7 1.7-2.8 2.75L18 13.525 16.25 14.8l-1.675-1.1H11.4q-.5 1.3-1.7 2.15-1.2.85-2.7.85Zm0-.7q1.5 0 2.538-.9 1.037-.9 1.312-2.1h3.95l1.425.95 1.8-1.275L19.6 13.85 21.45 12l-1-1h-9.6q-.275-1.2-1.312-2.1Q8.5 8 7 8 5.35 8 4.175 9.175 3 10.35 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Z"/>
    </Icon>
  );
});

IconMaterialKeyW100.displayName = 'AmauiIconMaterialKeyW100';

export default IconMaterialKeyW100;
