import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Security'

      short_name='Security'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.85q-.275 0-.512-.038-.238-.037-.438-.112-3.1-1.15-5.075-4.1Q4 14.65 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.55-1.975 6.5t-5.075 4.1q-.2.075-.438.112-.237.038-.512.038Zm0-1.95q2.425-.75 4.05-2.962 1.625-2.213 1.9-4.938H12V4.125l-6 2.25v5.175q0 .175.05.45H12Z"/>
    </Icon>
  );
});

IconMaterialSecurity.displayName = 'AmauiIconMaterialSecurity';

export default IconMaterialSecurity;
