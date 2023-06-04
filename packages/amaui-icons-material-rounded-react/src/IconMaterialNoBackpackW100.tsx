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
      <path d="m18.7 15.875-.7-.7V8q0-1.1-.775-1.875-.775-.775-1.875-.775H8.4q-.125 0-.175.05l-.6-.6q.1-.05.275-.088.175-.037.4-.062V3.5q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v1.15h4V3.5q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v1.15q1.2.125 2.1 1.037.9.913.9 2.313Zm-2.75-2.75-.425-.425q.15.05.263.163.112.112.162.262Zm-2.7-2.7Zm6.6 10.425L3.15 4.15l.5-.5 16.7 16.7Zm-7.5-8.2v.7h-4q-.15 0-.25-.1T8 13q0-.15.1-.25t.25-.1Zm-.3.4ZM5.975 5.975l.5.5q-.225.325-.35.713Q6 7.575 6 8v11.35q0 .35.225.575.225.225.575.225h10.4q.35 0 .575-.225Q18 19.7 18 19.35V18l.7.7v.65q0 .625-.438 1.063-.437.437-1.062.437H6.8q-.625 0-1.062-.437-.438-.438-.438-1.063V8q0-.575.175-1.088.175-.512.5-.937Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackW100.displayName = 'AmauiIconMaterialNoBackpackW100';

export default IconMaterialNoBackpackW100;
