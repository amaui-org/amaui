import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeHealthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeHealthW100'

      short_name='HomeHealth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.15 13.85v1.65q0 .35.25.6t.6.25q.35 0 .6-.25t.25-.6v-1.65h1.65q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25h-1.65V10.5q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6v1.65H9.5q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25ZM6.8 19.7q-.625 0-1.062-.438Q5.3 18.825 5.3 18.2v-7.8q0-.35.163-.675.162-.325.437-.525l5.2-3.925q.4-.3.9-.3t.9.3L18.1 9.2q.275.2.438.525.162.325.162.675v7.8q0 .625-.438 1.062-.437.438-1.062.438Zm0-.7h10.4q.35 0 .575-.225Q18 18.55 18 18.2v-7.8q0-.2-.087-.363-.088-.162-.238-.287l-5.2-3.9q-.2-.175-.475-.175-.275 0-.475.175l-5.2 3.9q-.15.125-.237.287Q6 10.2 6 10.4v7.8q0 .35.225.575Q6.45 19 6.8 19Zm5.2-6.675Z"/>
    </Icon>
  );
});

IconMaterialHomeHealthW100.displayName = 'AmauiIconMaterialHomeHealthW100';

export default IconMaterialHomeHealthW100;
