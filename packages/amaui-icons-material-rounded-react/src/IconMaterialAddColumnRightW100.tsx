import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnRightW100'

      short_name='AddColumnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M429-760H192q-14 0-23 9t-9 23v496q0 14 9 23t23 9h237v-560ZM192-172q-24.75 0-42.37-17.63Q132-207.25 132-232v-496q0-24.75 17.63-42.38Q167.25-788 192-788h496q24.75 0 42.38 17.62Q748-752.75 748-728v40q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-40q0-14-9-23t-23-9H457v560h231q14 0 23-9t9-23v-40q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v40q0 24.75-17.62 42.37Q712.75-172 688-172H192Zm541.96-214q-5.96 0-9.96-4.02-4-4.03-4-9.98v-66h-66q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM457-480Zm-28 0h28-28Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialAddColumnRightW100.displayName = 'AmauiIconMaterialAddColumnRightW100';

export default IconMaterialAddColumnRightW100;
