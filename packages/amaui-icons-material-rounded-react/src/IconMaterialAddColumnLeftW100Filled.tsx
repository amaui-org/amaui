import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnLeftW100Filled'

      short_name='AddColumnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M225.96-386q-5.96 0-9.96-4.02-4-4.03-4-9.98v-66h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-66v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM531-172v-616h237q24.75 0 42.38 17.62Q828-752.75 828-728v496q0 24.75-17.62 42.37Q792.75-172 768-172H531Zm-259 0q-24.75 0-42.37-17.63Q212-207.25 212-232v-41q0-5.62 4-9.31 4-3.69 10-3.69 80.51 0 137.26-56.26Q420-398.52 420-480q0-81.48-56.74-137.74Q306.51-674 226-674q-5.6 0-9.8-3.61-4.2-3.61-4.2-9.39v-41q0-24.75 17.63-42.38Q247.25-788 272-788h231v616H272Z"/>
    </Icon>
  );
});

IconMaterialAddColumnLeftW100Filled.displayName = 'AmauiIconMaterialAddColumnLeftW100Filled';

export default IconMaterialAddColumnLeftW100Filled;
