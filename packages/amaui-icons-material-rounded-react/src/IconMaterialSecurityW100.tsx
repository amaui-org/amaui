import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityW100'

      short_name='Security'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.525q-.2 0-.362-.038-.163-.037-.288-.087-2.625-1.075-4.337-3.6Q5.3 14.275 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.175-1.712 5.7-1.713 2.525-4.338 3.6-.125.05-.287.087-.163.038-.363.038Zm0-.625q2.425-.75 4.05-2.962 1.625-2.213 1.9-4.938H12V4.15L6.525 6.175q-.25.1-.387.3-.138.2-.138.45v4.6q0 .2.05.475H12Z"/>
    </Icon>
  );
});

IconMaterialSecurityW100.displayName = 'AmauiIconMaterialSecurityW100';

export default IconMaterialSecurityW100;
