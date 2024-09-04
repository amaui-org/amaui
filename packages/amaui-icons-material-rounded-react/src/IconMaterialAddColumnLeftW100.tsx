import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnLeftW100'

      short_name='AddColumnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M531-200h237q14 0 23-9t9-23v-496q0-14-9-23t-23-9H531v560Zm-259 28q-24.75 0-42.37-17.63Q212-207.25 212-232v-40q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v40q0 14 9 23t23 9h231v-560H272q-14 0-23 9t-9 23v40q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-40q0-24.75 17.63-42.38Q247.25-788 272-788h496q24.75 0 42.38 17.62Q828-752.75 828-728v496q0 24.75-17.62 42.37Q792.75-172 768-172H272Zm-46.04-214q-5.96 0-9.96-4.02-4-4.03-4-9.98v-66h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-66v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM503-480Zm28 0h-28 28Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialAddColumnLeftW100.displayName = 'AmauiIconMaterialAddColumnLeftW100';

export default IconMaterialAddColumnLeftW100;
