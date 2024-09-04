import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnRightW100Filled'

      short_name='AddColumnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M733.96-386q-5.96 0-9.96-4.02-4-4.03-4-9.98v-66h-66q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM192-172q-24.75 0-42.37-17.63Q132-207.25 132-232v-496q0-24.75 17.63-42.38Q167.25-788 192-788h237v616H192Zm265 0v-616h231q24.75 0 42.38 17.62Q748-752.75 748-728v41q0 5.62-4 9.31-4 3.69-10 3.69-80.51 0-137.26 56.26Q540-561.48 540-480q0 81.48 56.74 137.74Q653.49-286 734-286q5.6 0 9.8 3.61 4.2 3.61 4.2 9.39v41q0 24.75-17.62 42.37Q712.75-172 688-172H457Z"/>
    </Icon>
  );
});

IconMaterialAddColumnRightW100Filled.displayName = 'AmauiIconMaterialAddColumnRightW100Filled';

export default IconMaterialAddColumnRightW100Filled;
