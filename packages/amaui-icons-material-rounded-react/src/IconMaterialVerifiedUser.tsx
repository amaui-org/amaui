import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerifiedUser = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedUser'

      short_name='VerifiedUser'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 12.7-1.375-1.4q-.3-.3-.712-.3-.413 0-.713.3t-.312.712q-.013.413.287.713l2.125 2.125q.3.3.7.3.4 0 .7-.3l4.25-4.25q.3-.3.3-.713 0-.412-.3-.712t-.712-.3q-.413 0-.713.3ZM12 21.925h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Zm0-2.025q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.9Z"/>
    </Icon>
  );
});

IconMaterialVerifiedUser.displayName = 'AmauiIconMaterialVerifiedUser';

export default IconMaterialVerifiedUser;
