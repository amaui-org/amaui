import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixOffW100'

      short_name='AutoFixOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.9 5.775-.275-.625L18 4.875q-.25-.1-.25-.375t.25-.375l.625-.275.275-.625q.1-.25.375-.25t.375.25l.275.625.625.275q.25.1.25.375t-.25.375l-.625.275-.275.625q-.1.25-.375.25t-.375-.25Zm-4.525 6.05-2.4-2.4 1.5-1.475q.225-.225.5-.225t.5.225l1.4 1.4q.225.225.225.5t-.225.5Zm4.85 8.675-6.75-6.75-6.4 6.35q-.2.2-.5.2t-.5-.2l-1.4-1.4q-.2-.2-.2-.5t.2-.5l6.4-6.375L3.325 4.6Q3.2 4.5 3.2 4.362q0-.137.125-.262t.25-.125q.125 0 .25.125l15.9 15.9q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm-13.65-.9 6.375-6.375-1.4-1.4L4.175 18.2Zm0 0-1.4-1.4 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialAutoFixOffW100.displayName = 'AmauiIconMaterialAutoFixOffW100';

export default IconMaterialAutoFixOffW100;
