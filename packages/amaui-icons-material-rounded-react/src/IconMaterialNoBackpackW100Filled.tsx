import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoBackpackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackW100Filled'

      short_name='NoBackpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.95 13.125 2.75 2.75V8q0-1.4-.9-2.313-.9-.912-2.1-1.037V3.5q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6v1.15h-4V3.5q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6v1.15q-.225.025-.4.062-.175.038-.275.088l7.9 7.9q.15.05.263.163.112.112.162.262Zm-4.3-.475h-3.3q-.15 0-.25.1T8 13q0 .15.1.25t.25.1h4Zm8.2 8.2L17.1 18.1h1l.6.6v.65q0 .625-.438 1.063-.437.437-1.062.437H6.8q-.625 0-1.062-.425Q5.3 20 5.3 19.35V8q0-.575.175-1.088.175-.512.5-.937l.4.4v1L3.15 4.15l.5-.5 16.7 16.7Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackW100Filled.displayName = 'AmauiIconMaterialNoBackpackW100Filled';

export default IconMaterialNoBackpackW100Filled;
