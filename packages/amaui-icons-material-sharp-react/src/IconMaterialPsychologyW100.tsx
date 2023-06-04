import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPsychologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychologyW100'

      short_name='Psychology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.3 19.7v-3h-3v-4h-.75q-.35 0-.525-.325-.175-.325.025-.675L7.4 9.35q.2-2.275 1.838-3.663Q10.875 4.3 13 4.3q2.35 0 4.025 1.65 1.675 1.65 1.675 4 0 1.8-1.113 3.275Q16.475 14.7 14.7 15.5v4.2Zm.7-.7h3v-3.95l.45-.2q1.725-.775 2.637-2.138Q18 11.35 18 10q0-2.075-1.462-3.537Q15.075 5 13 5q-2 0-3.4 1.312Q8.2 7.625 8.075 9.6l-1.4 2.4H8v4h3Zm1.65-6.1h.7l.05-.7q.45-.075.763-.25.312-.175.537-.45l.6.3.35-.6-.55-.4q.15-.425.15-.8 0-.375-.15-.8l.55-.4-.35-.6-.6.3q-.225-.275-.537-.45-.313-.175-.763-.25l-.05-.7h-.7l-.05.7q-.45.075-.762.25-.313.175-.538.45l-.6-.3-.35.6.55.4q-.15.425-.15.8 0 .375.15.8l-.55.4.35.6.6-.3q.225.275.538.45.312.175.762.25Zm.35-1.35q-.65 0-1.1-.45-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.1-.45.65 0 1.1.45.45.45.45 1.1 0 .65-.45 1.1-.45.45-1.1.45Zm-.65.45Z"/>
    </Icon>
  );
});

IconMaterialPsychologyW100.displayName = 'AmauiIconMaterialPsychologyW100';

export default IconMaterialPsychologyW100;
