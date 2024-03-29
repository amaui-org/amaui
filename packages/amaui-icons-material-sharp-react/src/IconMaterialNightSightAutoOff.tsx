import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightSightAutoOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoOff'

      short_name='NightSightAutoOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21q-3.35 0-5.675-2.325Q3 16.35 3 13q0-.95.213-1.838.212-.887.612-1.687L5.35 11q-.175.475-.262.975Q5 12.475 5 13q0 2.5 1.75 4.25T11 19q.525 0 1.025-.087.5-.088.975-.263l1.525 1.525q-.8.4-1.687.613Q11.95 21 11 21Zm8.775 1.6L1.4 4.225 2.8 2.8l3.65 3.65q.975-.675 2.125-1.063Q9.725 5 11 5q.125 0 .25.012.125.013.25.013-.725.8-1.113 1.812Q10 7.85 10 9q0 .275.025.55t.075.55l4.8 4.8q.275.05.55.075.275.025.55.025.8 0 1.525-.2.725-.2 1.375-.55-.15.9-.5 1.738-.35.837-.85 1.562l3.65 3.65ZM13.8 11 17 2h2l3.2 9h-1.9l-.7-2h-3.2l-.7 2Zm3.05-3.35h2.3L18 4Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoOff.displayName = 'AmauiIconMaterialNightSightAutoOff';

export default IconMaterialNightSightAutoOff;
