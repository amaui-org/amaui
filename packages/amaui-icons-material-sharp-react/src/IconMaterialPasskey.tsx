import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPasskey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Passkey'

      short_name='Passkey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560ZM120-160v-111q0-34 17-63t47-44q51-26 115.5-44T440-440q21 0 41 1.5t40 4.5q1 23 6 44t16 41q-23-5-49-8t-54-3q-72 0-128 17.5T220-307q-10 5-15 15t-5 21v31h400v80H120Zm610 40-50-60v-147q-35-13-57.5-43.5T600-440q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 69.5T760-327l40 47-40 40 40 40-70 80Zm-10-260q25 0 42.5-17.5T780-440q0-25-17.5-42.5T720-500q-25 0-42.5 17.5T660-440q0 25 17.5 42.5T720-380ZM440-640h-.5.5Zm0 280Z"/>
    </Icon>
  );
});

IconMaterialPasskey.displayName = 'AmauiIconMaterialPasskey';

export default IconMaterialPasskey;
