import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoBackpackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackW100'

      short_name='NoBackpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.7 15.875-.7-.7V8q0-1.1-.775-1.875-.775-.775-1.875-.775H8.4q-.125 0-.175.05l-.6-.6q.1-.05.275-.088.175-.037.4-.062v-2H10v2h4v-2h1.7v2q1.2.125 2.1 1.037.9.913.9 2.313Zm-2.7-2.7-.525-.525H16Zm3.85 7.675L3.15 4.15l.5-.5 16.7 16.7Zm-7.5-8.2v.7H8v-.7Zm.9-2.225Zm-1.2 2.625ZM5.975 5.975l.5.5q-.225.325-.35.713Q6 7.575 6 8v12.15h12V18l.7.7v2.15H5.3V8q0-.575.175-1.088.175-.512.5-.937Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackW100.displayName = 'AmauiIconMaterialNoBackpackW100';

export default IconMaterialNoBackpackW100;
