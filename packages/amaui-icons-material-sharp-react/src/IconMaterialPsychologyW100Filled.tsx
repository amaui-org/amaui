import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPsychologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychologyW100Filled'

      short_name='Psychology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 19.7v-3h-3v-4h-.75q-.35 0-.525-.325-.175-.325.025-.675L7.4 9.35q.2-2.275 1.838-3.663Q10.875 4.3 13 4.3q2.35 0 4.025 1.65 1.675 1.65 1.675 4 0 1.8-1.113 3.275Q16.475 14.7 14.7 15.5v4.2Zm2.35-6.8h.7l.05-.7q.45-.075.763-.25.312-.175.537-.45l.6.3.35-.6-.55-.4q.15-.425.15-.8 0-.375-.15-.8l.55-.4-.35-.6-.6.3q-.225-.275-.537-.45-.313-.175-.763-.25l-.05-.7h-.7l-.05.7q-.45.075-.762.25-.313.175-.538.45l-.6-.3-.35.6.55.4q-.15.425-.15.8 0 .375.15.8l-.55.4.35.6.6-.3q.225.275.538.45.312.175.762.25Zm.35-1.35q-.65 0-1.1-.45-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.1-.45.65 0 1.1.45.45.45.45 1.1 0 .65-.45 1.1-.45.45-1.1.45Z"/>
    </Icon>
  );
});

IconMaterialPsychologyW100Filled.displayName = 'AmauiIconMaterialPsychologyW100Filled';

export default IconMaterialPsychologyW100Filled;
