import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolunteerActivismFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolunteerActivismFilled'

      short_name='VolunteerActivism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 13q-2.35-2.125-4.175-4.062Q10 7 10 5.3q0-1.4.95-2.35Q11.9 2 13.3 2q.8 0 1.5.337.7.338 1.2.913.5-.575 1.2-.913Q17.9 2 18.7 2q1.4 0 2.35.95.95.95.95 2.35 0 1.7-1.825 3.638Q18.35 10.875 16 13ZM1 22V11h4v11Zm13 0-7-1.975V11h1.975L17 14v2h-4l-1.75-.675-.35.925L13 17h9v2Z"/>
    </Icon>
  );
});

IconMaterialVolunteerActivismFilled.displayName = 'AmauiIconMaterialVolunteerActivismFilled';

export default IconMaterialVolunteerActivismFilled;
